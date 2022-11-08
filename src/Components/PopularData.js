import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

class PopularData extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		const { posts } = this.props;
		const postList = this.props.posts.length
			? this.props.posts.map((info) => {
					return <React.Fragment>hello</React.Fragment>;
			  })
			: "";

			return (
				<div>
						{/* {postList} */}
				</div>
			);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.items,
});

const mapDispatchToProps = () => {
	return {
		fetchPosts: () => dispatch (fetchData()) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularData);
