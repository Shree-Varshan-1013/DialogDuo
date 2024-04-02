module.exports = (values) => {
	const {
		name,
		jobTitle,
		email,
		linkedIn,
		description,
		languages,
		school,
		schoolYear,
		collegeYear,
		college,
		experience,
		skills,
		projects,
		contact,
		location,
	} = values;

	let htmlTemplate = `
	<!DOCTYPE html>
    <html>
    <head>
    <title>${name}'s Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box;
		transition: 0.35s ease;
		font-style: normal;
	  }
	  .rela-block {
		width: 100%;
		display: block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .rela-inline {
		display: inline-block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .floated {
		display: inline-block;
		position: relative;
		margin: false;
		top: ;
		left: ;
		right: ;
		bottom: ;
		float: left;
	  }
	  .abs-center {
		display: false;
		position: absolute;
		margin: false;
		top: 50%;
		left: 50%;
		right: false;
		bottom: false;
		-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
		text-align: center;
		width: 88%;
		font-style: normal;
	  }
	  body {
		font-family: 'Nunito';
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
		background-size: cover;
		font-style: normal;
	  }
	  
	  .caps {
		text-transform: uppercase;
	  }
	  .justified {
		text-align: justify;
	  }
	  p.light {
		color: #777;
		font-size: 14px;
		font-style: normal;
	  }
	  h2 {
		font-family: 'Nunito', serif;
		font-size: 30px;
		line-height: 40px;
		color: #000;
		font-style: normal;
	  }
	  h3 {
		font-family: 'Nunito', serif;
		font-size: 21px;
		font-weight: 700;
		line-height: 28px;
		color: #000;
	  }
	  .page {
		width: 90%;
		max-width: 1200px;
		margin: 80px auto;
		background-color: #fff;
		box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);
	  }
	  .top-bar {
		height: 220px;
		background-color: #202846;
		color: #fff;
	  }
	  .name {
		display: false;
		position: absolute;
		margin: false;
		top: false;
		left: calc(350px + 5%);
		right: 0;
		bottom: 0;
		height: 120px;
		text-align: center;
		font-family: 'Nunito';
		font-size: 58px;
		font-weight: 700;
		line-height: 40px;
		font-style: normal;
	  }
	  .name div {
		width: 94%;
	  }
	  .side-bar {
		display: false;
		position: absolute;
		margin: false;
		top: 60px;
		left: 2%;
		right: false;
		bottom: 0;
		width: 380px;
		background-color: #eeaeca;
		border-radius: 30px 30px 0px 0px;
		padding: 320px 30px 50px;
	  }
	  .mugshot {
		display: false;
		position: absolute;
		margin: false;
		top: 50px;
		left: 70px;
		right: false;
		bottom: false;
		height: 210px;
		width: 210px;
	  }
	  .mugshot .logo {
		margin: -23px;
	  }
	  .logo {
		display: false;
		position: absolute;
		margin: false;
		top: 0;
		left: 0;
		right: false;
		bottom: false;
		z-index: 100;
		margin: 0;
		color: #000;
		height: 250px;
		width: 250px;
	  }
	  .logo .logo-svg {
		height: 100%;
		width: 100%;
		stroke: #000;
		cursor: pointer;
	  }
	  .logo .logo-text {
		display: false;
		position: absolute;
		margin: false;
		top: 60%;
		left: ;
		right: 20%;
		bottom: ;
		cursor: pointer;
		font-family: 'Nunito', serif;
		font-size: 60px;
		font-weight: 700;
		line-height: 58.333333333333336px;
		font-style: normal;
	  }
	  .social {
		padding-left: 10px;
		margin-bottom: 0px;
		cursor: pointer;
	  }
	  
	  .side-header {
		font-family: 'Nunito', serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
		margin: 60px auto 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #888;
	  }
	  .list-thing {
		padding-left: 20px;
		margin-bottom: 5px;
	  }
	  .content-container {
		margin-right: 0;
		width: calc(95% - 350px);
		padding: 25px 40px 50px;
	  }
	  .content-container > * {
		margin: 0 auto 25px;
	  }
	  .content-container > h3 {
		margin: 0 auto 5px;
	  }
	  .content-container > p.long-margin {
		margin: 0 auto 50px;
	  }
	  .title {
		width: 80%;
		text-align: center;
	  }
	  .separator {
		width: 300px;
		height: 2px;
		background-color: #999;
	  }
	  .greyed {
		background-color: rgb(202, 205, 223);
		width: 100%;
		text-align: center;
		font-family: 'Nunito';
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
	  }
	  @media screen and (max-width: 1150px) {
		.name {
		  color: #fff;
		  font-family: 'Nunito';
		  font-size: 38px;
		  font-weight: 100;
		  line-height: 48px;
		}
	  }	  
	</style>
	  </head>
	  <body>
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	  <div class="rela-block page">
        <div class="rela-block top-bar">
			<div class=" name"><div class="abs-center">${name}</div></div>
        </div>
		<div class="side-bar">
		<div class="mugshot">
			<div class="logo">
				<svg viewbox="0 0 80 80" class="rela-block logo-svg">
					<path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
				</svg>
			</div>
		</div>
  
		<p class="mb-1">Job Title :  ${jobTitle}</p>
		<p class="mb-1">Location :  ${location}, India</p>
  
		<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-envelope"></i></span>${email}</p>`;
	if (contact != "" && contact != null)
		htmlTemplate += `<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-phone-square-alt"></i></span>${contact}</p>`;

	if (projects != "" && projects != null)
		htmlTemplate += ` <p class="rela-block caps side-header">Projects</p>
	  <p class="rela-block list-thing">${projects}</p>`;

	htmlTemplate += `
	</div>
	<div class="rela-block content-container">			
	<div class="rela-block caps greyed">Profile</div>`;
	if (linkedIn != "" && linkedIn != null)
		htmlTemplate += `<p class="rela-block social mb-4"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-linkedin"></i></span>${linkedIn}</p>`;

	htmlTemplate += `<div class="rela-block caps greyed">Education </div>`;
	if (college != "" && college != null)
		htmlTemplate += ` <h3 class="mb-0" style="padding-left: 10px;">${college}</h3>
	  <p class="text-muted light mt-0 mb-1" style="padding-left: 10px;">${collegeYear}</p>
		  <br/>`;

	if (school != "" && school != null)
		htmlTemplate += `  <h3 class="mb-0" style="padding-left: 10px;">${school}</h3>
	  <p class="text-muted light mt-0 mb-1" style="padding-left: 10px;">${schoolYear}</p>
		  <br/>`;

	htmlTemplate += `<div class="rela-block caps greyed">Experience</div>`;

	if (experience != "" && experience != null)
		htmlTemplate += `<p class="justified" style="font-size:17px;">${experience}</p>`;


	htmlTemplate += `<div class="rela-block caps greyed">About Me</div>`;

	if (description != "" && description != null)
		htmlTemplate += `<p class="justified" style="font-size:17px;">${description}</p>
	  <div class="rela-block caps greyed">Languages known</div>
    <p class="justified" style="font-size:17px;">${languages}</p>
    <div class="rela-block caps greyed">Skills</div>
    <p class="justified" style="font-size:17px;">${skills}</p>`;

	htmlTemplate += `</div>
	  </div>
	  </body>
	  </html>
	`;
	return htmlTemplate;
};