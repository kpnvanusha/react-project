export const Card = (props) => {
    const {id, name, cloudinaryImageId, areaName, costForTwo, cuisines, avgRatingString } = props.resData.info
    return (
        <>
            <li className="card-container" key={id} role="listitem">
                <a className="clickable-card-container" aria-describedby={`card-info-${id}`}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                    className="card-image-container" width="200px" height="200px" alt={`image of ${name}`} loading="lazy"/>
                    <div className="card-text-container">
                        <div className="card-name" id={`card-title-${id}`}>{name}</div>
                        <div className="area-name">{areaName}</div>
                        <div className="card-type">{cuisines.join(',')}</div>
                        <div className="rating">{avgRatingString}</div>
                        <div className="cost-info" id={`card-info-${id}`}>{costForTwo}</div>
                    </div>
                </a>
            </li>
        </>
    )
} 