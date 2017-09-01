#Electromagnetics

Electromagnetic
	Lorentz Equation: \[ \vec{F} = q [\vec{E} + (\vec{v}\times\vec{B})] \]
		||
		| \( \vec{F} \)	| (N)						| Force				&
		| q				| (C) 						| Charge			&
		| E				| (N/C) = (V/m)				| Electric Field	&
		| \( \vec{v} \)	| \( (m s^{-1}) \)			| Velocity			&
		| \( \vec{B} \)	| (T)						| Magnetic Field	&
		||
	Charge
		Quantification of Charge: \[ q = \pm n q_{e} \]
			Oil-Drop Experiment
		Charge Density
			Line
			Area
			Volume

Electric Fields: \[ E_T = \sum E_i \]
	Permittivity
	[math](equations/Coulombs_Law_Electric_Field_of_a_Point Charge.eqn)
	[math](equations/Coulombs_Constant.eqn)
	Electric Field Visualization
		Electric Field Lines: Positive to negative 
		+Equipotential Lines: 
			Same Electric Potential
			Perpendicular to Electric Field Lines
	Electric Fields from Charge Shapes
		Charged Plate(s): \[ E = \frac{\sigma}{2 \varepsilon_0} \]
			Between Parallel Plates of equal charge: \[ E = \frac{\sigma}{\varepsilon_0} \]
			OutSide Parallel Plates of equal charge: \[ E = 0 \]
			Derivation: Consider a cylinder perpendicular to plan holding charge:
				Gauss's Law: \[ \oint \vec{E} \cdot d\vec{A} = \frac{Q}{\varepsilon_0} \]
				\[ 2EA = \frac{\sigma A}{\varepsilon_0} \]
				\[ E = \frac{\sigma}{2 \varepsilon_0} \]
			||
			| E					| (N/C) = (V/m)				| Electric Field		&
			| \( \sigma \)		| (C/m^2)					| Area Charge Density	&
			| \( \varepsilon_{0} = 8.85418781762 \times 10^{-12} \) = 8.85418781762e-12								| \( (F m^-1) \)		| Vacuum Permittivity		&
			||
		Line of Charge: \[ dE = k_e \frac{dq}{r^2} = k_e \frac{\lambda ds}{r^2} \]
			\[ E = \frac{2 k_e \lambda}{r_\perp} \]
			||
			| E					| (N/C) = (V/m)				| Electric Field	&
			| \( \lambda \)		| (C/m)						| Line Charge Density	&
			| s					| (m)						| Arc					&
			| q					| (C) = (A s)				| Charge				&
			| r					| (m)						| Position				&
			||
			||
			| Coulomb's constant	|:	\( k_e = \frac{1}{4 \pi \varepsilon_0 } = 8.9875517873681764 \times 10^9	(N m^{2} C^{-2}) \)		:|:		(N m^2 C^-2)	:|:		8.9875517873681764e9	:&
			||
		Charge Ring (Straight On): \[ E = k_e \frac{qz}{(z^2 +R^2)^{3/2}} \]
			||
			| q					| (C) = (A s)				| Charge			&
			| E					| (N/C) = (V/m)				| Electric Field	&
			| z					| (m)						| Distance			&
			| R					| (m)						| Ring Radius		&
			||
			||
			| Coulomb's constant	|:	\( k_e = \frac{1}{4 \pi \varepsilon_0 } = 8.9875517873681764 \times 10^9	(N m^{2} C^{-2}) \)		:|:		(N m^2 C^-2)	:|:		8.9875517873681764e9	:&
			||
		Charged Disk (Straight On): \[ E = \frac{\sigma}{2 \varepsilon_0} \left( 1- \frac{|z|}{\sqrt{z^2 + R^2}} \right) \]
			||
			| E					| (N/C) = (V/m)				| Electric Field		&
			| \( \sigma \)		| \( (C m^{-2}) \)			| Area Charge Density	&
			| R					| (m)						| Disk Radius			&
			| q					| (C) = (A s)				| Charge				&
			| z					| (m)						| Distance				&
			||
			||
			| Vacuum Permittivity	|:	\( \varepsilon_{0} = 8.85418781762 \times 10^{-12}	(F m^{-1}) \)									:|:		(F m^-1)		:|:		8.85418781762e-12		:&
			||
		Dipole: \[ E = \frac{1}{2 \pi \varepsilon_0} \frac{p}{r^3} \]
			Iff at a distance that's large compared to the length of the electric dipole.
			||
			| E					| (N/C) = (V/m)				| Electric Field			&
			| \( \vec{p} \)		| (C m)						| Electric Dipole Moment	&
			| r					| (m)						| Distance					&
			||
			||
			| Vacuum Permittivity	|:	\( \varepsilon_{0} = 8.85418781762 \times 10^{-12}	(F m^{-1}) \)									:|:		(F m^-1)		:|:		8.85418781762e-12		:&
			||
	Electric Flux: \[ \Phi_E = \vec{E} \cdot \vec{A} = \int \vec{E} \cdot d\vec{A} \]
		Gauss's Law (Electric): \[ \Phi_{E,T} = \oint \vec{E} \cdot d\vec{A} = \frac{Q}{\varepsilon_0} \]
			In words: The total electric flux is proportional to the total enclosed charge.
			||
			| \( \Phi_E \)		| (V m) 					| Electric Flux		&
			| E					| (N/C) = (V/m)				| Electric Field	&
			| A					| \( (m^2) \)				| Area				&
			| Q					| (C)						| Enclosed Charge	&
			| \( \varepsilon_{0} = 8.85418781762 \times 10^{-12} \) = 8.85418781762e-12								| \( (F m^-1) \)		| Vacuum Permittivity		&
			||
	Electric Dipole Moment: \[ \vec{p}= q \ell \hat{p} \]
		||
		| \( \vec{p}, \mu_{E} \)	| (C m)					| Electric Dipole Moment		&
		| q							| (C)					| Charge						&
		| \( \ell \)				| (m)					| Length of Dipole				&
		||
		Torque: \[ \vec{\tau} = \vec{p} \times \vec{E} \]
			||
			| \( \vec{\tau} \)	| (N/m)						| Torque on Rigid Dipole	&
			| \( \vec{p} \)		| (C m)						| Electric Dipole Moment	&
			| E					| (N/C) = (V/m)				| Electric Field			&
			||
		Potential Energy: \[ U = -\vec{p} \cdot \vec{E} \]
			||
			| U					| \( (J) =  (kg m^2 s^{-2}) \)	| Potential Energy	&
			| \( \vec{p} \)		| (C m)						| Electric Dipole Moment	&
			| E					| (N/C) = (V/m)				| Electric Field			&
			||
Magnetic Fields ayy: \[ B_T = \sum B_i \]
	Definition: \[ \vec{F} = q (\vec{v}\times\vec{B}) \]
		Induced by Charge Velocity
		||
		| \( \vec{F} \)	| (N)						| Force				&
		| q				| (C) 						| Charge			&
		| \( \vec{v} \)	| \( (m s^{-1}) \)			| Velocity			&
		| \( \vec{B} \)	| (T)						| Magnetic Field	&
		||
		Units: \[ T = \frac{ V  s }{ m^{2} }  =\frac { N }{ A m } =\frac { J }{ A m^{2} } =\frac { H A }{ m^{2} } =\frac { Wb }{ m^{2} } =\frac { kg }{ C s } =\frac { N s }{ C m } =\frac { kg }{ A s^{2} } \]
	Force from Current Shapes
		Lorentz Equation (Moving Point Charge): \[ \vec{F} = q [\vec{E} + (\vec{v}\times\vec{B})] \]
			Cyclotron Radius Equation: \[ r = \frac{ m  v }{ q B } \]
			||
			| \( \vec{F} \)	| (N)						| Force				&
			| q				| (C) 						| Charge			&
			| E				| (N/C) = (V/m)				| Electric Field	&
			| r				| (m)						| Radius			&
			| \( \vec{v} \)	| \( (m s^{-1}) \)			| Velocity			&
			| \( \vec{B} \)	| (T)						| Magnetic Field	&
			||
		Magnetic Force on a Current-Carrying Wire: \[ \vec{F} = L \vec{I}  \times \vec{B} \]
			||
			| \( \vec{F} \)	| (N)						| Force				&
			| L				| (m) 						| Length			&
			| \( \vec{I} \)	| (A)						| Current			&
			| \( \vec{B} \)	| (T)						| Magnetic Field	&
			||
	Magnetic Fields from Current Shapes
		+Straight Wire
			Ampere’s Law: \[ \oint \vec{B} \cdot d\vec{\ell} = \mu_0 I \]
			Infinite Line of Current: \[ \vec{B} = \frac{\mu_0 I}{2 \pi r} \]
		+Curved Wire
			Biot-Savart Law: \[ d\vec{B} = \oint {\frac {\mu _{0} I d\vec{L} \times \hat{r} }{4\pi |\vec{r}|^{2}}} \]
				||
				| L		| (m)		| Length along current	&
				||
			Curve of Current: \[ \vec{B} = \frac{\mu_0 I \Phi}{4 \pi r} \]
				||
				| \( \Phi \) | \( ^{(R)}\)		| Angle of the Curve	&
				||
	Magnetic Flux: \[ \Phi_B = \int \vec{B} \cdot d\vec{A} \]
		Gauss's Law (Magnetic): \[ \Phi_B = \oint\oint_{S} \vec{B} \cdot d\vec{S} = 0 \]
		||
		| \(\Phi_B \)	| (Wb)		| Magnetic Flux &
		||
	Maxwell's Equations
		||
		|:								:|: Derivative Form																											:|: Integral Form																																													:&
		|: Gauss’s Law (Electric):		:|: \[ \nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_{0}} \]																:|: \[ \Phi_{E,T} = \oint \vec{E} \cdot d\vec{A} = \frac{Q}{\varepsilon_0} = \oint\oint \vec{E} \cdot d\vec{S} = \frac{\iiint \rho dV}{\varepsilon_0} \]											:&
		|: Gauss’s Law (Magnetic):		:|: \[ \nabla \cdot \vec{B} = 0 \]																							:|: \[ \Phi_B = \oint\oint_{S} \vec{B} \cdot d\vec{S} = 0 \]																																		:&
		|: Maxwell-Faraday Equation:	:|: \[ \nabla \times \vec{E} =-{\frac {\partial \vec{B} }{\partial t}} \]													:|: \[ \oint _{\partial \Sigma} \vec{E} \cdot d\vec{\ell} = -\frac{d}{dt} \iint _{\Sigma} \vec{B} \cdot \mathrm {d} \vec{S} \]																		:&
		|: Modified Ampere’s Law:		:|: \[ \nabla \times \vec{B} = \mu _{0} \left(\vec{J} +\varepsilon _{0} \frac{\partial \vec{E} }{\partial t} \right) \]		:|: \[ \oint _{\partial \Sigma }\vec{B} \cdot d \vec{\ell} = \mu _{0} \iint _{\Sigma } \vec{J} \cdot d\vec{S} + \mu _{0} \varepsilon_{0} \frac{d}{dt} \iint _{\Sigma} \vec{E} \cdot d\vec{S} \]		:&
		||
		Maxwell's Equations Variables
	Induced Current:
		Faraday’s Law: \[ V_{\varepsilon} = N \frac{d \Phi_B}{dt} \]
			||
			| \(\Phi_B \)		| (Wb)		| Magnetic Flux 			&
			| N					| unitless	| Number of Coil Turns		&
			| V_{\varepsilon}	|			| ElectroMotive Force (EMF)	&
			||
		Lenz's Law: Induced current counter the initial magnetic field.
		ElectroMotive Force (EMF): V_{\varepsilon} = N B A \omega sin(\omega t)
Light
	Induced by Charge Acceleration