import React, {useState} from "react"


function FetchDataComponent() {

    const [data, setData] =useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () =>  {
        setIsLoading(true);
        setError(null);

        try{
            const response = await fetch( "https://api.vschool.io/<yourname>/todo")
            const jsonData= await response.json();
            setData(jsonData)
        } catch (error) {
            setError(error);

        }

        setIsLoading(false);

    }
    
    
    
    


    return(

        <div>
                <button onClick={fetchData}  disabled={isLoading}> Click for Data
                </button>

                {error && <p>{error.message}</p>}
                {data && (

                    <div>
                            <h2>Fetched Data</h2>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
        </div>
    )
}

export default FetchDataComponent