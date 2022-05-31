import react, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";




const UnityPreviewTable = () => {

    const [GifData, setGifData] = useState([]);
    const [search, setSearch] = useState("");
    const [filterGifData, setfilterGifData] = useState([]);



    const columns = [
        {
            name: 'Topic',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Demo',
            selector: row => <img src={row.link} loading="lazy" alt="SwimmingGif..." width={220} height={120} />,
            sortable: true,
        },
    ];
    
    
    const url = 'https://raw.githubusercontent.com/DevFrogora/ALL-Project-Preview/master/battleField/api.json'

    useEffect( () => {
        (async () => {
            try {
                const response = await axios.get(url);
                setGifData(response.data);
                setfilterGifData(response.data);
                console.log(response.data)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect( () =>{
        const result = GifData.filter( (eachGifData)=>{
            return eachGifData.title.toLowerCase().match(search.toLowerCase());
        })

        setfilterGifData(result)
    },[search])

    return (<DataTable
        title ="Preview Of Unity Project"
        columns={columns}
        data={filterGifData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        subHeader
        subHeaderComponent = {
            <input type="text" placeholder="Search Topic" 
            className="w-55 form-control"
            value={search}
            onChange={ (e) => setSearch(e.target.value)}
            />
        }
    />)
};

export default UnityPreviewTable