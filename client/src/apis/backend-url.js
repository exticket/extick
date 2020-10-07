const {http,domain} = process.env.NODE_ENV === 'production' ? 
                        {http: 'https', domain: process.env.REACT_APP_DOMAIN} :
                        {http: 'http', domain: 'localhost:3000'} ;

const url = `${http}://${domain}`

export default url;