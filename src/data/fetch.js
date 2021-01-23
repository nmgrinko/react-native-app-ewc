const url = 'https://bftnp50zw7.execute-api.us-east-1.amazonaws.com/dev/getNumber/';
const key = 'MgvXto1alM1WFEKBQ95ca3cptlcoe2Z571zUgDbZ';

export default function (body) {

const data = fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': key
          },
          body: JSON.stringify(body),
        }
      )
      .then((response) => response.json())
      .catch(() => alert('No internet connection'));

return data

}