import config from '../config.js'

  const host = config.apiBase
  // const authQuery = `apikey=${isMobile ? config.apiMobileKey : config.apiKey}`
  const authQuery = `apikey=${config.apiKey}`

  const execute = ({ path, callback = () => {}, ...config }) => {
    let s = '?'
    if (path.indexOf(s) !== -1) {
      s = '&'
    }
    const url = `${host}${path}${s}${authQuery}`

      $.ajax({
        url: url,
        data: config.headers,
        type: "GET",
        dataType: "json",
        success: function(data) {
          callback(data)
        },
        error: function(data) {
          callback(data)
        }
      })
    }


  const get = (path, headers, options) => {
    return execute({
      ...options,
      path,
      headers,
      method: 'get'
    })
  }
  
  const getMember = (headers, options) => {
    return get('members/attributes', headers, options)
  }

export default { getMember }

