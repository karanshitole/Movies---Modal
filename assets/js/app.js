const cl = console.log;


const showmodalbtn =document.getElementById("showmodalbtn");
const backdrop = document.getElementById("backdrop");
const ourModal = document.getElementById("ourModal");
const movieForm = document.getElementById("movieForm");
const moviecontainer = document.getElementById("moviecontainer")
const closebtns = [ ...document.querySelectorAll(".closebtn")];

const movieTitlecontrol = document.getElementById("movieTitle");
const imgurlcontrol = document.getElementById("imgurl");
const ratingcontrol = document.getElementById("rating");


let movieArr = [];


const templating = (cardArr) => {
        let result = ``;

        cardArr.forEach(movie => {
                result += `
                        <div class="col-md-4">
				<div class="card movieCard mb-4">
					<div class="card-header">
						<h4 class="m-0 d-flex justify-content-between" >
							${movie.movieTitle}
                                                        <small>
							   Rating : ${movie.rating}/5
						        </small>
						</h4>
						
					</div>
					<div class="card-body ">
						<img src="${movie.imgurl}" alt="">
					</div>
					<div class="card-footer d-flex justify-content-between">
						<button class="btn btn-primary">Edit</button>
						<button class="btn btn-danger">Delete</button>
					</div>
				</div>
		        </div>
                       `
                       moviecontainer.innerHTML =result;
        })
}

const showmodalHandler = () => {
       // cl("btn clicked")
        backdrop.classList.toggle("visible")
        ourModal.classList.toggle("visible")
}

closebtns.forEach(eve => {

        eve.addEventListener("click",showmodalHandler)
})
const onmovieAdd = (eve) => {
        eve.preventDefault();
        let movieobj = {
                movieTitle : movieTitlecontrol.value,
                imgurl : imgurlcontrol.value,
                rating  : ratingcontrol.value
        }

        movieArr.unshift(movieobj);

        cl(movieArr)
        // movieForm.reset()
        eve.target.reset()
        showmodalHandler()
        templating(movieArr)

        // backdrop.classList.toggle("visible")
        // ourModal.classList.toggle("visible")
}

showmodalbtn.addEventListener("click",showmodalHandler);
movieForm.addEventListener("submit",onmovieAdd);