import { useEffect, useState } from "react";
import './scroll.css';
export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [scrollpercent, setScrollpercent] = useState(0);

    function handlescrollpercent() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollpercent((howMuchScrolled / height) * 100);
    }

    async function fetchdata(geturl) {
        try {
            setLoading(true);
            const response = await fetch(geturl);
            const result = await response.json();
            console.log(result);
            if (result && result.products && result.products.length > 0) {
                setData(result.products);  // Set data to products array
            }
        } catch (err) {
            console.log(err);
            setErrormsg(err.message);
        } finally {
            setLoading(false);  // Stop loading once the data is fetched or on error
        }
    }

    useEffect(() => {
        fetchdata(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handlescrollpercent);
        return () => {
            window.removeEventListener('scroll', handlescrollpercent);  // Properly remove the scroll event listener
        };
    }, []);  // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollpercent}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {loading ? <p>Loading...</p> : null}
                {errormsg ? <p>{errormsg}</p> : null}
                {data && data.length > 0
                    ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
                    : <p>No data available</p>}
            </div>
        </div>
    );
}