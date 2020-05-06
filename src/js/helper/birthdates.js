// import moment from 'moment';
// import isEmpty from 'lodash/isEmpty'
// import capitalize from 'lodash/capitalize'
// import sortBy from 'lodash/sortBy'
// import minBy from 'lodash/minBy'

const isEmpty = _.isEmpty
const capitalize = _.capitalize
const sortBy = _.sortBy
const minBy = _.minBy

const WEEK_IN_SECONDS = 60 * 60 * 24 * 7
const MAX_MONTHS = 36

export const BIRTH_TYPE = {
  baby: 'baby',
  toddle: 'toddle',
  pregnancy: 'pregnancy'
}

export const parseDate = date => moment(date);

export const ageInMonths = date => {
  parseDate(date);
};

export const isBaby = birthdate => {
  const today = moment();
  return (
    moment(birthdate)
      .add(12, 'month')
      .format('YYY-MM-DD') > today.format('YYY-MM-DD')
  );
};

export const isToddler = birthdate => {
  const today = moment();
  return (
    moment(birthdate)
      .add(12, 'month')
      .format('YYY-MM-DD') <= today.format('YYY-MM-DD')
  );
};

export const getChildrenTypesMap = member => {
  const types = {};
  if (member.pregnancy && member.pregnancy.id) {
    types[member.pregnancy.id] = 'unborn'
  }
  member.born_children.map(c => {
    if (isBaby(c.birth_date)) {
      types[c.id] = 'baby';
    } else if (isToddler(c.birth_date)) {
      types[c.id] = 'toddler';
    }
  });
  return types;
};

const getParsedBirthDay = (arrtibutes) => {
  let date = arrtibutes['birth_date'] || arrtibutes['due_date']

  if (typeof date === 'string') {
    const matchs = date.match(/(\d*)((\-|\+)\d*)/)

    date = moment.unix(parseInt(matchs[1]) / 1000)
  }

  return date.utc().startOf('day')
}

const getYear = (weeks) => parseInt(weeks / 52)
const getMonth = (weeks) =>  Math.round((weeks % 52) / 4.34812)
const getTotalMonth = (year, month) => parseInt(year) * 12 + parseInt(month)

const getAgeString = (attributes) => {
  let weeks = 0
  const parsedBrithDay = getParsedBirthDay(attributes)

  if (parsedBrithDay) {
    const birthDayTimestamp = parsedBrithDay.unix()
    const currentTimestamp = moment.utc().startOf('day').unix()

    weeks = parseInt((currentTimestamp - birthDayTimestamp) / WEEK_IN_SECONDS)
  }

  if (weeks < 4) { return { weeks, age: 'newborn', type: BIRTH_TYPE.baby, slug: '0-month-old-baby'} }

  const months = getMonth(weeks)

  if (weeks >= 4 && weeks < 52) {
    return { weeks, age: `${months} mo`, type: BIRTH_TYPE.baby, slug: `${months}-month-old-baby`}
  }

  const years = getYear(weeks)
  let ageString = `${years} yr`
  ageString += months > 0 ? ` ${months} mo` : ''

  if (years === 1 && months <= 0) {
    return { weeks, age: ageString, type: BIRTH_TYPE.baby, slug: '12-month-old-baby'}
  }

  return { weeks, age: ageString, type: BIRTH_TYPE.toddle, slug: `${getTotalMonth(years, months)}-month-old-month-old` }
}

const getPregnancyInfo = (pregnancy) => {
  const parsedBrithDay = getParsedBirthDay(pregnancy)
  const birthDayTimestamp = parsedBrithDay.unix()
  const currentTimestamp = moment.utc().startOf('day').unix()
  const dateDiffInWeek = Math.ceil((birthDayTimestamp - currentTimestamp) / WEEK_IN_SECONDS)

  let currentWeek = 1
  if (typeof dateDiffInWeek === 'number') {
    currentWeek = Math.min(40 - dateDiffInWeek, 42)
  }

  if (currentWeek < 1) {
    currentWeek = 1
  }

  return { type: BIRTH_TYPE.pregnancy, age: parsedBrithDay, weeks: currentWeek, slug: `${currentWeek}-weeks-pregnant` }
}

export const getChildrenMapping = member => {
  const children = {[BIRTH_TYPE.pregnancy]: [], [BIRTH_TYPE.baby]: [], [BIRTH_TYPE.toddle]: []}
  const bornChildren = member.born_children
  if(!isEmpty(bornChildren)) {
    bornChildren.map(child => {
      const { weeks, age, type, slug } = getAgeString(child)
      const childData = {
        type,
        id: child.id,
        weeks,
        info: `${child.first_name ? capitalize(child.first_name) : 'Baby'}, ${age}`,
        slug,
        age
      }
      children[type].push(childData)
    })

    children[BIRTH_TYPE.baby] = sortBy(children[BIRTH_TYPE.baby], ['weeks'])
    children[BIRTH_TYPE.toddle] = sortBy(children[BIRTH_TYPE.toddle], ['weeks'])
  }

  const pregnancy = member.pregnancy
  if (!isEmpty(pregnancy)) {
    const { type, weeks, age, slug } = getPregnancyInfo(pregnancy)

    const pregnancyInfo = {
      type,
      id: pregnancy.id,
      weeks,
      info: `Expecting ${pregnancy.code_name ? `"${pregnancy.code_name}"`: ''} ${age.format('MMMM D')}`,
      slug
    }

    children[BIRTH_TYPE.pregnancy].push(pregnancyInfo)
  }

  return children
}

export const getChildrenInfo = (childrenMapping) => {
  return [].concat(childrenMapping[BIRTH_TYPE.pregnancy], childrenMapping[BIRTH_TYPE.baby], childrenMapping[BIRTH_TYPE.toddle])
}

const filterOldChildren = (children, type) => {
  const babies = []
  children.forEach(c => {
    c.type === type && babies.push(c)
  })
  if (babies.length === 0) { return null }
  return minBy(babies, (b) => {
    return b.weeks
  })
}

const filterToddleIrregular = (children, type) => {
  const minToddle = filterOldChildren(children, type)
  if (minToddle) {
    const year = getYear(minToddle.weeks)
    const month = getMonth(minToddle.weeks)
    if (getTotalMonth(year, month) <= MAX_MONTHS) { return minToddle }
  }
  return null
}

export const getStuffChildren = (childrenMapping) => {
  const data = []
  const pregnancy = childrenMapping[BIRTH_TYPE.pregnancy][0]
  const baby = filterOldChildren(childrenMapping[BIRTH_TYPE.baby], BIRTH_TYPE.baby)
  const toddle = filterToddleIrregular(childrenMapping[BIRTH_TYPE.toddle], BIRTH_TYPE.toddle)
  pregnancy && data.push(pregnancy)
  baby && data.push(baby)
  toddle && data.push(toddle)
  return data
}
