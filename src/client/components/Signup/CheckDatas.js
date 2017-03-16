export var mesFonctions = {
	checkGender: function(value) {
		if (value === 'homme' || value === 'femme')
		{
			console.log('bonne valeur');
		}
		else {
			console.log('mauvaise valeur');
		}
	},
	checkSexualOrientation: function(value) {
		if (value === 'homme' || value === 'femme' || value === 'les deux')
		{
			console.log('bonne valeur');
		}
		else {
			console.log('mauvaise valeur');
		}
	},
	checkAge: function(value) {
		var isnum = function isnum(number) {
			for(var j=0; j<number.length; j++)
			{
				var hh = number.charAt(j).charCodeAt(0);
				if (hh > 47 && hh < 58) //Chiffres
				{
				}
				else
				{
					return false;
				}
			}
			return true;
		};
		if (isnum(value))
		{
			if (value >= 18)
			{
				console.log('majeur');
			}
			else
			{
				console.log('mineur');
			}
		}
		else
		{
			console.log('Mauvaise valeur');
		}
	},
	checkTown: function(value) {
		var isalpha = function alphacity(alphane) {
			var text = alphane;
			for(var j=0; j<text.length; j++)
			{
				var alphaa = text.charAt(j);
				var hh = alphaa.charCodeAt(0);
				if(hh == 39 || hh == 45 || hh == 47 //Repectivement ', -, /
				|| (hh > 64 && hh < 91) //Majuscules
				|| (hh > 96 && hh < 123)//Minuscules
				|| (hh > 191 && hh < 256))//Accents
				{
				}
				else
				{
					return false;
				}
			}
			return true;
		};
		if (isalpha(value))
		{
			console.log('Valide');
		}
		else
		{
			console.log('Invalide');
		}
	},
	checkUsername: function(value) {
		var isalpha = function alphacity(alphane) {
			var text = alphane;
			for(var j=0; j<text.length; j++)
			{
				var alphaa = text.charAt(j);
				var hh = alphaa.charCodeAt(0);
				if((hh > 44 && hh < 47) || hh == 95 //Repectivement -, ., /, _
				|| (hh > 64 && hh < 91) //Majuscules
				|| (hh > 96 && hh < 123)//Minuscules
				|| (hh > 47 && hh < 58))//Chiffres
				{
				}
				else
				{
					return false;
				}
			}
			return true;
		};
		if (isalpha(value))
		{
			console.log('Valide');
		}
		else
		{
			console.log('Invalide');
		}
	},
	checkEmail: function(value) {
		var isValidMail = function bonmail(mailteste) {
			var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

			if(reg.test(mailteste))
			{
				return(true);
			}
			else
			{
				return(false);
			}
		};
		if (isValidMail(value))
		{
			console.log('Valide');
		}
		else
		{
			console.log('Invalide');
		}
	},
	checkPassword: function(value) {
		//checkPassword
		return true;
	},
	checkPasswordConfirm: function(value) {
		//checkPassword
		return true;
	}
};

String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
