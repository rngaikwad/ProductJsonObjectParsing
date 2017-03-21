
var fs = require('fs');
fs.readFile('product.json', 'utf8', function (err, data) {
  if (err) throw err;

  var jsonData = JSON.parse(data);
  console.log("frontend  josn object........");
		
		console.log(jsonData);
		console.log("...................................");
  
	var producttype = jsonData.productType;

	var category = jsonData.category;
	var subcategory1 = jsonData.subcat1;
	var subcategory2 = jsonData.subcat2;
	var subcategory3 = jsonData.subcat3;
	var category_id =[category,subcategory1,subcategory2,subcategory3];
	var tagname = [];
		for(var i = 0; i<jsonData.tagName.length;i++)
			 tagname.push(jsonData.tagName[i]);
	
		var  specifications = jsonData.specifications;

		var productImages = jsonData.productImages;
		var image_gallery=[];
		for(key in productImages) {
		var image_gall = productImages[key];
		image_gallery.push(image_gall);
		}

	  if(producttype =="simple")
	  {

		var newobj = {
			name : jsonData.productTitle,
			image_gallery:image_gallery,
			category_id:category_id,
			type:jsonData.productType,
			price:jsonData.price,
			discount:jsonData.discount,
			quantity:jsonData.quantity,
			description:jsonData.description,
			relatedcategories:[jsonData.relatedcategory,jsonData.relatedSubCategory],
			tagName:tagname,
			specifications: specifications,
			oneItemIndia:jsonData.oneItemIndia,
			additionalIndia:jsonData.additionalIndia,
			oneItemAll:jsonData.oneItemAll,
			additionalAll:jsonData.additionalAll,
			shipOrigin:jsonData.shipOrigin,
			processTime:jsonData.processTime,
			allProcessTime:jsonData.allProcessTime,
			indShipOrigin:jsonData.indShipOrigin
		}

			console.log("save json object according to Db json object ........");
			console.log(newobj);
			console.log("...................................");

	  }
 	
 	else{
 		console.log("error");
 	}

 	var type = newobj.type;
		var tagname = [];
			for(var i = 0; i<newobj.tagName.length;i++)
			tagname.push(newobj.tagName[i]);
			
		var productImages = {};
		var imgnum =0;
			for(var i=0; i<newobj.image_gallery.length; i++){
				var imgnum = imgnum+1;
				productImages["ProductImages"+imgnum] = newobj.image_gallery[i];
			}

		var product_specifications = newobj.specifications;
	 
	  if(type == 'simple')
	  {
		  var returnObj = {
		  	productType:newobj.type,
		  	productImages:productImages,
		  	productTitle:newobj.name,
		  	category:newobj.category_id[0],
		  	subcat1:newobj.category_id[1],
		  	subcat2:newobj.category_id[2],
		  	subcat3:newobj.category_id[3],
		  	price:newobj.price,
		  	discount:newobj.discount,
		  	quantity:newobj.quantity,
		  	description:newobj.description,
		  	relatedcategory:newobj.relatedcategories[0],
		  	relatedSubCategory:newobj.relatedcategories[0],
		  	tagName:tagname,
		  	specifications:product_specifications,
		  	oneItemIndia:newobj.oneItemIndia,
		  	additionalIndia:newobj.additionalIndia,
		  	oneItemAll:newobj.oneItemAll,
		  	additionalAll:newobj.additionalAll,
		  	shipOrigin:newobj.shipOrigin,
		  	processTime:newobj.processTime,
		  	allProcessTime:newobj.allProcessTime,
		  	indShipOrigin:newobj.indShipOrigin

		  }

		  console.log(" retrun json object according to frontend from database........");
		  console.log(returnObj);
		  console.log("...................................");
	}

});


















