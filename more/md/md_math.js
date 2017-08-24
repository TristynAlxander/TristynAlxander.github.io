function loadMathToNode(MathNode, mathURL){																					// Load MathNode from MathURL
	
	
	var xmlhttp;																											//
	if(window.XMLHttpRequest){xmlhttp = new XMLHttpRequest();} else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}		// XML Request
	xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState == 4 && xmlhttp.status == 200){								//
																																//
		var is_derivation = mathURL.length > 15 && mathURL.substr(mathURL.length-14,14) === "derivation.eqn";					//
		// Make & Append Math																									// Make & Append Math
		var mathBox = parseMath(xmlhttp,is_derivation);									//
		MathNode.appendChild(mathBox);																								//
																																	//
		}};																														//
	xmlhttp.open("GET", mathURL, true);																						//
	xmlhttp.send();																											//
	}																														//

function parseMath(xmlhttp,is_derivation){																								// Verify Equation Version
	var Equation = xmlhttp.responseXML.documentElement;																			//
	if(Equation.getAttribute("version") === "1.0"){return parseMathV1(xmlhttp,is_derivation);}												// Parse for proper version. 
	}																															//

function parseMathV1(xmlhttp,is_derivation){																				// Version 1 Parser
																																//
	Equation = xmlhttp.responseXML.documentElement;																				// Get Doc Element: Equation.
																																//
	//<table class="mathBox">																										// Make Table (see left)
	var mathBox = document.createElement("table");																					//
	if(is_derivation){mathBox.setAttribute("class", "mathBox tex2jax_ignore");}														// MathJax ignores these
	else{mathBox.setAttribute("class", "mathBox");}																					//
	mathBox.style.display = "inline-table";																							//
	
	MakeHeader();
	
	function MakeHeader(){
		// ToDo: Verify mathBox is inherited.
		
		//<thead><tr><td colspan=6 id="mathTitle">	MathTitle	</td></tr></thead>													// Make Table Head (see left)
		//<thead>																														// Make Head Element (see left)
		var thead = document.createElement("thead");																						//
		mathBox.appendChild(thead);																											//
																																			//
		//<tr>																															// Make Table Row  (see left)
		var TRhead = document.createElement("tr");																							//
		thead.appendChild(TRhead);																											//
																																			//
		//<td colspan=6 id="mathTitle">																									// Make Table Down  (see left)
		var TDhead = document.createElement("td");																							//
		TDhead.setAttribute("class", "mathTitle");																							//
		TDhead.setAttribute("colspan", "6");																								//
		TRhead.appendChild(TDhead);																											//
																																			//
		// Txt Node																														// Make Text Node
		var mathTitle = document.createTextNode(Equation.getAttribute("name"));																//
		TDhead.appendChild(mathTitle);																										//
		}
	


	//<tbody><tr><td colspan=6 id="LateX">		LaTeX		</td></tr></tbody>													// Make LateX Display (see left)
	//<tbody>																														// Make Table Body (see left)
	var tbody = document.createElement("tbody");																						//
	mathBox.appendChild(tbody);																											//
																																		//
	//<tr>																															// Make Table Row (see left)
	var TRbody = document.createElement("tr");																							//
	tbody.appendChild(TRbody);																											//
																																		//
	//<td colspan=6 id="LateX">																										// Make Table Down (see left)
	var TDbody = document.createElement("td");																							//
	TDbody.setAttribute("class", "LateX");																								//
	TDbody.setAttribute("colspan", "6");																								//
	TRbody.appendChild(TDbody);																											//
																																		//
	// MathJax Txt Node																												// Make MathJax Compatible Txt Node. 
	var mathLatexStr = "";																												// Empty String
	LatexList = Equation.getElementsByTagName("LaTeX");																					// Get all LaTeX
	for(var i=0; i<LatexList.length;i++){																								// Add LaTex
		if(mathLatexStr === ""){mathLatexStr = LatexList[i].childNodes[0].nodeValue;}														// if empty, no break space
		else{mathLatexStr = mathLatexStr +"\\" + LatexList[i].childNodes[0].nodeValue;}														// else, separate with break space 
		}																																	//
	mathLatexStr="\\["+mathLatexStr+"\\]";																								// Declare LaTeX Environment
	var mathLatex = document.createTextNode(mathLatexStr);																				// Create TxtNode
	TDbody.appendChild(mathLatex);																										// Append Txt Node




	// Create Table Footer for Variables																						// Create Table Footer for Variables (see below)
	//<tfoot class="VarArea">
	//		<tr class="LabelRow">	<td><span class="symbol">Symbols</span><input type="checkbox" title="Symbols"></td>		<td><span class="mathObject">Math&nbsp;Objects</span><input type="checkbox" title="Math Objects"></td>	<td><span class="unit">Unit</span><input type="checkbox" title="Units"></td>	<td>Variable&nbsp;Names<input type="checkbox"></td>	<td>Measurands<input type="checkbox"></td>	<td>Dependencies<input type="checkbox"></td>	</tr>
	//		<tr class="LabelRow">	<td>					 Symbols						  					  </td>		<td>						 Math      Objects													 </td>	<td>				   Units										   </td>	<td>Variable&nbsp;Names						  </td>	<td>Measurands						 </td>	<td>Dependencies					   </td>	</tr>
	//		...
	//</tfoot class="VarArea">
																																	//
	// <tfoot class="VarArea">																										// Make Footer (see left)
	var tfoot = document.createElement("tfoot");																						//
	tfoot.setAttribute("class", "VarArea");																								//
	mathBox.appendChild(tfoot);																											//
																																		//
																																		//
	// <tr class="LabelRow">																											// Make Title Row (first row)
	var TRfootLabel = document.createElement("tr");																							//
	TRfootLabel.setAttribute("class", "LabelRow");																							//
	TRfootLabel.style.display = "none";																										// default display = none
	tfoot.appendChild(TRfootLabel);																											//
																																			//
	
	// <td><span class="symbol">Symbols</span><input type="checkbox" title="Symbols"></td>													// Make Symbol Column (see left)
	var TDfootSym = document.createElement("td");																								//
	TRfootLabel.appendChild(TDfootSym);																											//
																																				//
	// <span class="symbol">Symbols</span>																										// Make Symbol Span  (see left)
	var SPfootSym = document.createElement("span");																									//
	SPfootSym.setAttribute("class","symbol");																										//
	TDfootSym.appendChild(SPfootSym);																												//
	// Make Text node																																// Make Text Node
	var footSymStr = document.createTextNode("Symbol");																									// 
	SPfootSym.appendChild(footSymStr);																													//
																																						// 
	// <input type="checkbox" title="Symbols">																									// Make Checkbox (see left)
	var INSym = document.createElement("input");																									//
	INSym.setAttribute("type","checkbox");																											//
	INSym.checked = true;																															// default checked
	INSym.setAttribute("title","Symbols");																											//
	INSym.addEventListener("click"   , function(){ShowHideCheckbox(this,"symbol")}, false);															// Show Hide Listener
	TDfootSym.appendChild(INSym);																													//
																																					//
																																					//
	// <td><span class="mathObject">Math&nbsp;Objects</span><input type="checkbox" title="Math Objects"></td>								// Make Math Object Column (see left)
	var TDfootMO = document.createElement("td");																								//
	TRfootLabel.appendChild(TDfootMO);																											//
																																				//
	// <span class="mathObject">Math&nbsp;Objects</span>																						// Make MathObject span (see left)
	var SPfootMO = document.createElement("span");																									//
	SPfootMO.setAttribute("class","mathObject");																									//
	TDfootMO.appendChild(SPfootMO);																													//
	// Make Text Node																																// Make Text Node
	var footMOStr = document.createTextNode("Math\u00A0Object");																						//
	SPfootMO.appendChild(footMOStr);																													//
																																						//
	// <input type="checkbox" title="Math Objects">																								// Make Checkbox (see left)
	var INMO = document.createElement("input");																										//
	INMO.setAttribute("type","checkbox");																											//
	INMO.checked = false;																															// default unchecked
	INMO.setAttribute("title","Math Objects");																										//
	INMO.addEventListener("click"   , function(){ShowHideCheckbox(this,"mathObject")}, false);														// Show Hide Listener
	TDfootMO.appendChild(INMO);																														//
																																					//
	// <td><span class="unit">Unit</span><input type="checkbox" title="Units"></td>															// Make Unite Column (see left)
	var TDfootU = document.createElement("td");																									//
	TRfootLabel.appendChild(TDfootU);																											//
																																				//
	// <span class="unit">Unit</span>																											// Make Unit Span (see left)
	var SPfootU = document.createElement("span");																									//
	SPfootU.setAttribute("class","unit");																											//
	TDfootU.appendChild(SPfootU);																													//
	// Make Text Node																																// Make Text Node
	var footUStr = document.createTextNode("Unit");																										//
	SPfootU.appendChild(footUStr);																														//
																																						//
	// <input type="checkbox" title="Units">																									// Make Checkbox (see left)
	var INU = document.createElement("input");																										//
	INU.setAttribute("type","checkbox");																											//
	INU.checked = true;																																// default checked
	INU.setAttribute("title","Units");																												//
	INU.addEventListener("click"   , function(){ShowHideCheckbox(this,"unit")}, false);																// Show Hide Listener
	TDfootU.appendChild(INU);																														//
			
			//<td>Variable&nbsp;Names<input type="checkbox"></td>
				var TDfootVar    = document.createElement("td");
				TRfootLabel.appendChild(TDfootVar);
				var SPfootVar    = document.createElement("span");
				SPfootVar.setAttribute("class","VarName");
				TDfootVar.appendChild(SPfootVar);
				var footVarStr = document.createTextNode("Variable\u00A0Name");
				SPfootVar.appendChild(footVarStr);
				//<input type="checkbox">
					var INVar        = document.createElement("input");
					INVar.setAttribute("type","checkbox");
					INVar.setAttribute("title","Variable Names");
					INVar.addEventListener("click"   , function(){ShowHideCheckbox(this,"VarName")}, false);
					INVar.checked    = true;
					TDfootVar.appendChild(INVar);
				
			//<td>Measurands<input type="checkbox"></td>
				var TDfootMeas    = document.createElement("td");
				TRfootLabel.appendChild(TDfootMeas);
				var SPfootMeas    = document.createElement("span");
				SPfootMeas.setAttribute("class","measurands");
				TDfootMeas.appendChild(SPfootMeas);
				var footMeasStr = document.createTextNode("Measurands");
				SPfootMeas.appendChild(footMeasStr);
				//<input type="checkbox">
					var INMeas        = document.createElement("input");
					INMeas.setAttribute("type","checkbox");
					INMeas.checked = false;
					INMeas.setAttribute("title","Measurands");
					INMeas.addEventListener("click"   , function(){ShowHideCheckbox(this,"measurands")}, false);
					TDfootMeas.appendChild(INMeas);
				
			//<td>Dependencies<input type="checkbox"></td>
				var TDfootDep    = document.createElement("td");
				TRfootLabel.appendChild(TDfootDep);
				var SPfootDep    = document.createElement("span");
				SPfootDep.setAttribute("class","dependencies");
				TDfootDep.appendChild(SPfootDep);
				var footDepStr = document.createTextNode("Dependencies");
				SPfootDep.appendChild(footDepStr);
				//<input type="checkbox">
					var INDep        = document.createElement("input");
					INDep.setAttribute("type","checkbox");
					INDep.checked = false;
					INDep.setAttribute("title","Dependencies");
					INDep.addEventListener("click"   , function(){ShowHideCheckbox(this,"dependencies")}, false);
					TDfootDep.appendChild(INDep);
				
		//<tr class="Var">
		VarList = Equation.getElementsByTagName("Variables")[0].getElementsByTagName("Var");
		for(var i=0;i<VarList.length;i++){
			
			//<tr class="Var">
				var TRVar = document.createElement("tr");
				TRVar.setAttribute("class", "Var");
				tfoot.appendChild(TRVar);
				
				//<td><span>\( symbol \)</span></td>
					var TDVarSym = document.createElement("td");
					TDVarSym.setAttribute("class","popUp_Trigger");
					TRVar.appendChild(TDVarSym);
					var SPVarSym = document.createElement("span");
					SPVarSym.setAttribute("class","symbol");
					TDVarSym.appendChild(SPVarSym);
					
					var VarSymStrArray = VarList[i].getAttribute("symbol").split(", ")
					var VarSymStr = document.createTextNode("\\("+VarSymStrArray[0]+"\\)");
					if(VarSymStrArray.length > 1){
						TDVarSym.setAttribute("class","popUp_Trigger");
						var AltVarTable = document.createElement("table");
						AltVarTable.setAttribute("class","popUp_Content");
						TDVarSym.appendChild(AltVarTable);
						for(var j=1; j<VarSymStrArray.length; j++){
							var AltVarSymStr = document.createTextNode("\\("+VarSymStrArray[j]+"\\)");
							var AltVarTD     = document.createElement("td");
								AltVarTD.appendChild(AltVarSymStr);
							var AltVarTR     = document.createElement("tr");
								AltVarTR.appendChild(AltVarTD);
							AltVarTable.appendChild(AltVarTR);
							}
						}
					SPVarSym.appendChild(VarSymStr);
				
				//<td>mathObject</td>
					var TDVarMO = document.createElement("td");
					TRVar.appendChild(TDVarMO);
					var SPVarMO = document.createElement("span");
					SPVarMO.setAttribute("class","mathObject");
					TDVarMO.appendChild(SPVarMO);
					
					var VarMOStr = document.createTextNode(VarList[i].getAttribute("mathObject").replace(/ /g,"\u00A0"));			// To do Remove RegEx
					SPVarMO.appendChild(VarMOStr);
					
				//<td>unit</td>
					var TDVarU = document.createElement("td");
					TRVar.appendChild(TDVarU);
					var SPVarU = document.createElement("span");
					SPVarU.setAttribute("class","unit");
					TDVarU.appendChild(SPVarU);
					
					var VarUStrArray = VarList[i].getAttribute("unit").split(", ")
					var VarUStr = document.createTextNode("\\("+VarUStrArray[0]+"\\)");
					if(VarUStrArray.length > 1){
						TDVarU.setAttribute("class","popUp_Trigger");
						var AltVarTable = document.createElement("table");
						AltVarTable.setAttribute("class","popUp_Content");
						TDVarU.appendChild(AltVarTable);
						for(var j=1; j<VarUStrArray.length; j++){
							var AltVarSymStr = document.createTextNode("\\("+VarUStrArray[j]+"\\)");
							var AltVarTD     = document.createElement("td");
								AltVarTD.appendChild(AltVarSymStr);
							var AltVarTR     = document.createElement("tr");
								AltVarTR.appendChild(AltVarTD);
							AltVarTable.appendChild(AltVarTR);
							}
						}
					
					SPVarU.appendChild(VarUStr);
				
				//<td>name</td>
					var TDVarName = document.createElement("td");
					TRVar.appendChild(TDVarName);
					var SPVarName = document.createElement("span");
					SPVarName.setAttribute("class","VarName");
					TDVarName.appendChild(SPVarName);
					
					var VarNameStrArray = VarList[i].getAttribute("name").split(", ")
					var VarNameStr = document.createTextNode(VarNameStrArray[0].replace(/ /g,"\u00A0"));						// To do Remove RegEx
					if(VarNameStrArray.length > 1){
						TDVarName.setAttribute("class","popUp_Trigger");
						var AltVarTable = document.createElement("table");
						AltVarTable.setAttribute("class","popUp_Content");
						TDVarName.appendChild(AltVarTable);
						for(var j=1; j<VarNameStrArray.length; j++){
							var AltVarSymStr = document.createTextNode(VarNameStrArray[j].replace(/ /g,"\u00A0"));				// To do Remove RegEx
							var AltVarTD     = document.createElement("td");
								AltVarTD.appendChild(AltVarSymStr);
							var AltVarTR     = document.createElement("tr");
								AltVarTR.appendChild(AltVarTD);
							AltVarTable.appendChild(AltVarTR);
							}
						}
					
					SPVarName.appendChild(VarNameStr);
				
				//<td>measurands</td>
					var TDVarMeas = document.createElement("td");
					TRVar.appendChild(TDVarMeas);
					var SPVarMeas = document.createElement("span");
					SPVarMeas.setAttribute("class","measurands");
					TDVarMeas.appendChild(SPVarMeas);
					
					var VarNameStrArray = VarList[i].getAttribute("measurands").split(", ")
					var VarMeasStr = document.createTextNode(VarNameStrArray[0].replace(/ /g,"\u00A0"));						// To do Remove RegEx
					if(VarNameStrArray.length > 1){
						TDVarMeas.setAttribute("class","popUp_Trigger");
						var AltVarTable = document.createElement("table");
						AltVarTable.setAttribute("class","popUp_Content");
						TDVarMeas.appendChild(AltVarTable);
						for(var j=1; j<VarNameStrArray.length; j++){
							var AltVarSymStr = document.createTextNode(VarNameStrArray[j].replace(/ /g,"\u00A0"));				// To do Remove RegEx
							var AltVarTD     = document.createElement("td");
								AltVarTD.appendChild(AltVarSymStr);
							var AltVarTR     = document.createElement("tr");
								AltVarTR.appendChild(AltVarTD);
							AltVarTable.appendChild(AltVarTR);
							}
						}
					
					SPVarMeas.appendChild(VarMeasStr);
				
				//<td>dependencies</td>
					var TDVarD = document.createElement("td");
					TRVar.appendChild(TDVarD);
					var SPVarD = document.createElement("span");
					SPVarD.setAttribute("class","dependencies");
					TDVarD.appendChild(SPVarD);
					
					var VarDStr = document.createTextNode(VarList[i].getAttribute("dependencies").replace(/ /g,"\u00A0"));			// To do Remove RegEx
					SPVarD.appendChild(VarDStr);
			}
		
		//<tr class="Collapser">
			var TRfootCollapser = document.createElement("tr");
			TRfootCollapser.setAttribute("class", "Collapser");
			TRfootCollapser.addEventListener("click"   , function(){collapseVariables(this)}, false);
			tfoot.appendChild(TRfootCollapser);
		//<td>
			var TDfootCollapser = document.createElement("td");
			TDfootCollapser.setAttribute("colspan", "6");
			TRfootCollapser.appendChild(TDfootCollapser);
		//Text
			var collapserText = document.createTextNode("\u21F2");
			TDfootCollapser.appendChild(collapserText);
		
		
		return mathBox;
	}
function collapseVariables(tr){
	var footer = tr.parentNode;
	var VarList = footer.getElementsByClassName("Var");
	var LabelRow = footer.getElementsByClassName("LabelRow")[0];
	if(LabelRow.style.display === "none"){
		LabelRow.style.display = "table-row";
		for(var i=0;i<VarList.length;i++){
			VarList[i].style.display = "table-row";
			}
		}
	else{
		LabelRow.style.display = "none";
		for(var i=0;i<VarList.length;i++){
			VarList[i].style.display = "none";
			}
		}
	}
function ShowHideCheckbox(input,myClass){
	myClassList = input.parentNode.parentNode.parentNode.getElementsByClassName(myClass);
	if(input.checked){	for(var i = 0; i<myClassList.length;i++){myClassList[i].style.display = "inline";}}
	else{				for(var i = 0; i<myClassList.length;i++){myClassList[i].style.display = "none";  }}
	}
