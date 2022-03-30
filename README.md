<h1>WORLD WIDE API</h1>
  
<p>This API provides you with the basic informations about countries (name, continent, iso2,iso3 , currencycode , and flags soon !) </p>
  
  <hr/>
  
  <h2>Get all the datas ! </h2>
 
  <p>
  <address>https://worldwideapi.herokuapp.com/</addresss>
  <br/><br/>
  <p>Use AXIOS for better experience ! </p>
   https://axios-http.com/docs/intro
  <br/>
  <h2>Get world wide datas </h2>


```tsx
const myAPI = async () => {
  const response = await axios.get("https://worldwideapi.herokuapp.com/")
  .then((res: any) => {
    return res.data
  })
  return response.WORLD
}
  ```
  
  <h3>Calling It</h3>
  
```tsx
myAPI().then(
  (res:any) =>{
    console.log(res)
   }
)
```
 <hr/>
 
   <h2>Get country Data by index Like countryName, iso2/iso3  JSON OBJECT</h2>
  
```tsx
const myAPI = async (index, data) => {
  const response = await axios.get(`https://worldwideapi.herokuapp.com/${index}/${data}`)
  .then((res: any) => {
    return res.data
  })
  return response.data
}
```
  <h3>Calling It (by country Name)</h3>
  
```tsx
 myAPI("country", "morocco").then(
  (res:any) =>{
    console.log(res)
  }
)
```
  <h3>Calling It (by iso2)</h3>

```tsx
myAPI("iso2", "ma").then(
  (res:any) =>{
    console.log(res)
  }
)
```
  
  <h3>Calling It (by iso3)</h3>

```tsx
myAPI("iso3", "mar").then(
  (res:any) =>{
    console.log(res)
  }
)
```
  
  
 <hr/>
  
  <h2>Get counties by the currency or the continent (Array of countries)</h2>


```tsx
const myAPI = async (index, data) => {
  const response = await axios.get(`https://worldwideapi.herokuapp.com/${index}/${data}`)
  .then((res: any) => {
    return res.data
  })
  return response.datas
}
```

  <h3>Calling It by currency</h3>

```tsx
myAPI("currency", "eur").then(
  (res:any) =>{
    console.log(res)
  }
)
```
  <h3>Calling It by continent</h3>

```tsx
myAPI("continent", "europe").then(
  (res:any) =>{
    console.log(res)
  }
)
```
