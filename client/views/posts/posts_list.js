var postsData = [{
  title:"Introducing Telescope",
	author:"Sasha Greif",
	url:"http://www.sashagreif.com/introducing-telescope/"
},
{
	title:"Meteor",
	author:"Tom Coleman",
	url:"http://meteor.com/"
},
{
	title:"Meteor Book",
	author:"Tom Coleman",
	url:"http://themeteorbook.com"
},
{
	title:"Como comer melancia",
	author:"Bilibibinha do Sacavem",
	url:"http://naoteinteressa.com.br"
}
];

Template.postsList.helpers({
	posts:postsData
});
