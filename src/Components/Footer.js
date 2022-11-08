import React from "react";


const Footer = ({}) => (
	<footer>
		<div className="py-4" style={{backgroundColor: "#2E3B55"}}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-3">
					<div className="card-body">
						{/* <img src="https://www.mandai.com/content/dam/wrs/mandai-new-assets/logos/Logo-Mandai-EquaGreen.svg" alt="logo" height="60" className="d-inline-block align-text-top mb-3" /> */}
						<img src="https://pro.eslgaming.com/switzerland/wp-content/uploads/2021/07/360-LOL-white-1.png" alt="logo" height="60" className="d-inline-block align-text-top mb-3" />
						<p className="card-text text-light">
							Welcome to League of Legends. Lore Berlin, CA 700156
							ipsum simply text amet cing elit ext
							amet cing ipsum
						</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card-body">
						<h5 className="card-title	text-light">NEWSLETTER</h5>
						<p className="card-text text-light">
							Subscribe to our newsletter and get our latest news
							and updates.
						</p>
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" />
							<button className="btn btn-dark" type="button">Subscribe</button>
						</div>
						<div>
							<input type="checkbox" value="" />
							<label className=" text-light"> I agree to the privacy policy. </label>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card-body">
						<h5 className="card-title text-light">USEFUL LINKS</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item" style = {{backgroundColor: "#2E3B55"}}><a href="#"
									className="text-decoration-none text-light"><i className="bi bi-caret-right-fill"></i> Home</a></li>
							<li className="list-group-item" style = {{backgroundColor: "#2E3B55"}}><a href="#"
									className="text-decoration-none text-light"><i className="bi bi-caret-right-fill"></i> About</a></li>
							<li className="list-group-item" style = {{backgroundColor: "#2E3B55"}}>
								<a href="#" className="text-decoration-none text-light"><i className="bi bi-caret-right-fill"></i> Contact Us</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card-body">
						<h5 className="card-title text-light">ADDRESS</h5>
						<p className="card-text text-light"><i className="bi bi-geo-alt-fill"></i> 90 10h Street, Office 478 Road 5 Welcome to League of Legends. Lore
							Berlin, CA 700156 </p>
						<p className="card-text text-light"><i className="bi bi-envelope-fill"></i> LoL@gmail.com</p>
						<p className="card-text text-warning"><i className="bi bi-telephone-fill"></i> +88 1 0 941 25 70</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	</footer>
);

export default Footer