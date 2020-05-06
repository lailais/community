import TBApi from './TBApi'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const getCookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

export default (callback) => {
  const authToken = getCookie('TMPAUTHTIX-qa')
  if(!authToken) {
    return callback()
  }

  TBApi.getMember({
    ...headers,
    'auth_token': authToken
  }, {callback}) 
}
