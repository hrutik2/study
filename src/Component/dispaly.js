export const Display=({data})=>{
    function isObject(value) {
        return typeof value === "object" && value !== null;
      }
      console.log(data)
    return (
    <>
   {isObject(data) ? (
        Object.entries(data).map(([key, value], index) => (
          <div key={index}>
            <p>{key}: {String(value)}</p>
          </div>
        ))
      ) : (
        <p>{String(data)}</p>
      )}
      </>
    )
}