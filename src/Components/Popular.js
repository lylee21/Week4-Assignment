import React from "react";
import PopularData from "./PopularData";
// import { fetchPosts } from "../actions"

const Popular = ({}) => {
	return (
		<div style={{ backgroundColor: "white" }} className="overflow-auto">
			<h1 className="text-muted text-center my-4">Popular Players</h1>
			{/* { fetchPosts } */}
      		<PopularData />

			{/* <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/FEB/SEASONSTART/1220x400.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div> */}
		</div>
	);
};

export default Popular;
