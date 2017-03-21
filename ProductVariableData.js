
var fs = require('fs');
fs.readFile('variableproduct.json', 'utf8', function (err, data) {
  if (err) throw err;

	var jsonData = JSON.parse(data);
	console.log("frontend product variable  josn object");
		
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

		var color =[];
		var colorcount = jsonData.attributes.color.length; // get color count
		for (var i=0;i< jsonData.attributes.color.length;i++)
		{ 
			color.push(jsonData.attributes.color[i]);
		}

		var size = [];
		var sizecount = jsonData.attributes.size.length; // get size count
		for (var i=0;i< jsonData.attributes.size.length;i++)
		{	 
			size.push(jsonData.attributes.size[i]);
		}

		var collar = [];
		var collarcount = jsonData.attributes.collar.length; //get collar count
		for (var i=0;i< jsonData.attributes.collar.length;i++)
		{ 
			collar.push(jsonData.attributes.collar[i]);
		}

		var attributes = {color,size,collar};
		var variationproduct = colorcount*sizecount*collarcount;
		var variation= [];
		 for(var i=1; i <= variationproduct;i++)
		 variation.push(i);

	  if(producttype =="variable")
	  {

		var MainVariableProduct = {
			name : jsonData.productTitle,
			image_gallery:image_gallery,
			category_id:category_id,
			type:jsonData.productType,
			description:jsonData.description,
			relatedcategories:[jsonData.relatedcategory,jsonData.relatedSubCategory],
			tagName:tagname,
			specifications: specifications,
			shippingCostOneItemIndia:jsonData.shippingCostOneItemIndia,
			eachAdditionalItemCostIndia:jsonData.eachAdditionalItemCostIndia,
			shippingCostOneItemEverywhere:jsonData.shippingCostOneItemEverywhere,
			eachAdditionalItemCostEverywhere:jsonData.eachAdditionalItemCostEverywhere,
			shipOrigin:jsonData.shipOrigin,
			processTime:jsonData. processTime,
			allProcessTime:jsonData. allProcessTime,
			indShipOrigin:jsonData.indShipOrigin,
			attributes:attributes,
			variation:variation
		}

		console.log("save json object according to Db json object");
		console.log(MainVariableProduct);
		//console.log(MainVariableProduct.attributes);
		console.log("...................................");

		var variableData = [];
		var variabledatacount = jsonData.variations.length;
        for(var i =0; i<jsonData.variations.length;i++)
        {
	    	variation = jsonData.variations[i];
	    	var image_gallery;
	    	var images = [variation.variable.varImage1,
				variation.variable.varImage2,
				variation.variable.varImage3,
				variation.variable.varImage4,
				variation.variable.varImage5
				];
	    	image_gallery = images;
       
			var varproductType = "variation";
			var vartitle = variation.variable.varTitle;

			var variationobj = {
				name : variation.variable.varTitle,
				variableComponent:variation.variable.variableComponent,
				image_gallery:image_gallery,
				category_id:[category,subcategory1,subcategory2,subcategory3],
				type:varproductType,
				price:variation.variable.varPrice,
				discount:variation.variable.varDiscount,
				quantity:variation.variable.varQuantity,
				sku_number:variation.variable.varSKU,
				description:variation.variable.varDescription,
				relatedcategories:[jsonData.relatedcategory,jsonData.relatedSubCategory],
				tagName:tagname,
				specifications: specifications,
				shippingCostOneItemIndia:jsonData.shippingCostOneItemIndia,
				eachAdditionalItemCostIndia:jsonData.eachAdditionalItemCostIndia,
				shippingCostOneItemEverywhere:jsonData.shippingCostOneItemEverywhere,
				eachAdditionalItemCostEverywhere:jsonData.eachAdditionalItemCostEverywhere,
				shipOrigin:jsonData.shipOrigin,
				processTime:jsonData. processTime,
				allProcessTime:jsonData. allProcessTime,
				indShipOrigin:jsonData.indShipOrigin,
				variation:null
         	 }

          variableData.push(variationobj);
          
        }

     	var countvariabledata = variableData.length;
     	console.log("total variableproduct object is .. " +countvariabledata);
     	//console.log(variableData);
     	var variablenum =0;
     	for (var i =0; i<variableData.length;i++)
     	{
     		var varnum = variablenum++;
     		console.log(variablenum +" Product Variable Json Object");
     		console.log("************");
     		console.log(variableData[i]);
     		console.log("..............................................");
     	}

	  }
 	
 	else{
 		console.log("error in save variable product object");
 	}

 		// retrun MainVariableProduct json object;
      	var type = MainVariableProduct.type;
		var tagname = [];
			for(var i = 0; i<MainVariableProduct.tagName.length;i++)
			tagname.push(MainVariableProduct.tagName[i]);
			
		var productImages = {};
		var imgnum =0;
			for(var i=0; i<MainVariableProduct.image_gallery.length; i++){
				var imgnum = imgnum+1;
				productImages["ProductImages"+imgnum] = MainVariableProduct.image_gallery[i];
			}

		var product_specifications = MainVariableProduct.specifications;
	 
	  if(type == 'variable')
	  {
		  var returnObj = {
		  	productType:MainVariableProduct.type,
		  	productImages:productImages,
		  	productTitle:MainVariableProduct.name,
		  	category:MainVariableProduct.category_id[0],
		  	subcat1:MainVariableProduct.category_id[1],
		  	subcat2:MainVariableProduct.category_id[2],
		  	subcat3:MainVariableProduct.category_id[3],
		  	description:MainVariableProduct.description,
		  	relatedcategory:MainVariableProduct.relatedcategories[0],
		  	relatedSubCategory:MainVariableProduct.relatedcategories[0],
		  	tagName:tagname,
		  	specifications:product_specifications,
	  		shippingCostOneItemIndia:MainVariableProduct.shippingCostOneItemIndia,
			eachAdditionalItemCostIndia:MainVariableProduct.eachAdditionalItemCostIndia,
			shippingCostOneItemEverywhere:MainVariableProduct.shippingCostOneItemEverywhere,
			eachAdditionalItemCostEverywhere:MainVariableProduct.eachAdditionalItemCostEverywhere,
			shipOrigin:MainVariableProduct.shipOrigin,
			processTime:MainVariableProduct. processTime,
			allProcessTime:MainVariableProduct. allProcessTime,
			indShipOrigin:MainVariableProduct.indShipOrigin,
			variation:MainVariableProduct.variation

		  }
			console.log(" retrun MainVariableProduct json object according to frontend from database");
			console.log(returnObj);
			console.log("...................................");

	} else {
		console.log("error in MainVariableProduct return object");
		}

});


















