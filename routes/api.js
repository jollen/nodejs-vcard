var vcard = [];

exports.create = function(req, res){
	var person = {
			nickname: "",
			name: "",
			tel: ""
	};

	person.nickname = req.params.nickname;

	person.tel =  req.query.tel;
	person.name = req.query.name;

	vcard.push(person);

	res.end();
};

exports.read = function(req, res){
	res.send(vcard);
	res.end();	
};

exports.update = function(req, res){
	var nickname = req.params.nickname;

	vcard.forEach(function (entry) {
		if (entry.nickname === nickname) {
			console.log('found!');

			entry.name =  req.query.name;
			entry.tel =  req.query.tel;
		}
	});

	res.end();
};

exports.delete = function(req, res){
	res.end();
};