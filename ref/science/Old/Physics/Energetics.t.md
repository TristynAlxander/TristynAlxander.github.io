#Energetics

Work: \[ W = \vec{F} \cdot \vec{r} = \int \vec{F} \cdot d\vec{r} \]
	Sign Convention

Kinetic Energy
	Translational: \[ K_{i} = \frac{m s_i^{2}}{2}=\frac{p_i^2}{2m} \]
		||
		| K 						| (J) 							| Kinetic Energy	&
		| m							| (kg)							| Mass (Inertia)	&
		| \( \vec{p} \)				| \( (kg m s^{-1}) \)			| Momentum			&
		| s							| \( (m s^{-1}) \)				| Speed				&
		||
	Rotational: \[ K = \frac{I \vec{\omega}^2}{2}=\frac{L^2}{2I} \]
		||
		| K 						| \( (J) =  (kg m^2 s^{-2}) \)	| Kinetic Energy						&
		| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)			| Angular Velocity						&
		| I							| \( (kg m^2) \)				| Moment of Inertia (Angular Mass)		&
		| \( \vec{L} \)				| \( (J s) \)					| Angular Momentum						&
		||
	Thermal
Potential Energy: \[ U = |\vec{F}|/|\vec{r}| \]
	Energy via position (in a Force Feild).
	Free Particles: U=V=0
	\Delta U = -W_{con}
		||
		| U					| (J)	| Potential Energy	&
		| W					| (J)	| Work				&
		||
		Via Conservative Forces	_con
	Gravitational: \[ U_{i,j}=-\frac{G m_i m_j }{r} \]
		||
		| U					| \( (J) =  (kg m^2 s^{-2}) \)	| Potential Energy	&
		| \( \vec{r} \)		| \( (m) \)						| Radius			&
		| m					| (kg)							| Mass (Inertia)	&
		| _i,j				| unitless						| i wrt j			&
		| _i				| unitless						| wrt i				&
		||
		||
		| Universal Gravitational Constant			|:	\(G = 6.67384 \times 10^{-11} (N m^2 kg^{-2})\)		:|:	(N m^2 kg^-2)	:|:	6.67384e-11	:&
		||
	Elastic: \[ U(r) = \sum \frac{k r_i^2}{2} \]
			||
			| U					| \( (J) =  (kg m^2 s^{-2}) \)	| Potential Energy	&
			| k					| \( (kg s^{-2}) \)				| Spring Constant	&
			| \( \vec{r} \)		| \( (m) \)						| Position			&
			||
	Electric: \[ U= -k_e \frac{q Q}{r} \]
		||
		| U					| \( (J) =  (kg m^2 s^{-2}) \)	| Potential Energy			&
		||
		Dipole Moment: \[ U = -\vec{p} \cdot \vec{E} \]
			||
			| U					| \( (J) =  (kg m^2 s^{-2}) \)	| Potential Energy			&
			| \( \vec{p} \)		| (C m)							| Electric Dipole Moment	&
			| E					| (N/C) = (V/m)					| Electric Field			&
			||
		Voltage: \[ V= -k_e \frac{q}{r} \]
	Magnetic
Standard Temperature and Pressure (stp)
	Temperature: 25C = 298.15K
	Pressure: 1atm = 101.325 kPa
Laws of Thermodynamics
	Zeroth Law: Defines Temperature.
	First Law: Conservation of Energy.
		\[ E_T = \sum E_i \]
		\[ E_U = T S - P V + \sum \mu_i N_i \]
			||
			| \( E_U \)	| \( (J), (kg m^{2} s^{-2}) \)						| Internal Energy		&
			| P			| \( (Pa), (N m^{-2}), (kg m^-1 s^{-2}) \)			| Pressure				&
			| V			| \( (L), (m^{3}) \)								| Volume				&
			| \( \mu \)	| \( (J mol^{-1}), (kg m^{2} s^{-2} mol^{-1}) \)	| Chemical Potential	&
			| N			| (mol)												| Number				&
			||
		\[ dE = \delta Q - \delta W + \mu dN \]
		\[ dE = T dS - P dV + \mu dN  \]
		Note: There are conditions on which of these equations is most appropriate to use 
	Second Law: Entropy Increases
	Third Law: Entropy at 0K is 0.
(Gibbs) Free Energy: \[ G \equiv E_U + PV - TS = H - TS \]
	\[ \Delta G = \Delta H - T \Delta S \]
	\[ \Delta G = \Delta G^{0} + RT \ln(Q) \]
		\[ \lim_{t \to \infty} Q = K_{eq} \]
	[Endergonic]("Non-Spontaneous"):	\[ \Delta G &gt; 0 \]
	[Exergonic]("Spontaneous"):			\[ \Delta G &lt; 0 \]
	Equilibrium:						\[ \Delta G = 0 \]
	Variables
		||
		| G			| (J)										| Gibbs Free Energy		&
		| \( E_U \)	| (J)										| Internal Energgy		&
		| P			| (Pa)										| Pressure				&
		| V			| (L)										| Volume				&
		| H			| \( (J), (J mol^{-1}) \)					| Enthalpy				&
		| T			| (K)										| Temperature			&
		| S			| \( (J K^{-1}), (J mol^{-1} K^{-1}) \)		| Entropy				&
		| K_{i}		| ()										| XXXXXXX				&
		||
		||
		| Ideal Gas Constant		|: \(R = 8.3144621 (kg m^{2} s^{-2} mol^{-1} K^{-1}) \)		:|:	(kg m^2 s^-2 mol^-1 K^-1), (J mol^-1 K^-1)	:|:	8.3144621 :&
		||
	Minimized via entropy Maximization
	Simple Sum
		\[ \Delta G = \sum \Delta G_{f} - \sum \Delta G_{i} \]
			||
			| G		| \( (J), (kg m^{2} s^{-2}) \)		| Gibbs Free Energy		&
			| i		| (unitless)						| Initial				&
			| f		| (unitless)						| Final					&
			||
		\( \Delta G^{0}_{Formation} \)
	Nernst Equation: \[ \Delta G = -n F \Delta E \]
		||
		| F = 96485.3329			| \(  (s A mol^{-1}) \)				| Faraday Constant					&
		| G							| \( (J), (kg m^{2} s^{-2}) \)		| Gibbs Free Energy					&
		| n							| ()								| Number of Transfered Electrons	&
		| E =[Accepor] - [Donator]	| ()								| Potential Energy					&
		||
Enthalpy: \[ H \equiv E_U + PV \]
	\[ \Delta H = \Delta E_U + P \Delta V  \]
	Isobaric: \[ \Delta H = \Delta U + P \Delta V  \]
	[Isochoric]("Isovolumetric"): \[ \Delta H = \Delta U + \Delta P V \]
	Hess's Law: \[ \Delta^{0}_{reaction} = \sum \Delta H^{0}_{f, products} - \sum \Delta H^{0}_{f, reactants} \]
	Exothermic:		\( \Delta H &lt; 0 \)
	Endothermic:	\( \Delta H &gt; 0 \)
	Variables
		||
		| H			| \( (J), (kg m^{2} s^{-2}) \)						| Enthalpy				&
		| \( E_U \)	| \( (J), (kg m^{2} s^{-2}) \)						| Internal Energgy		&
		| P			| \( (Pa), (N m^{-2}), (kg m^-1 s^{-2}) \)			| Pressure				&
		| V			| \( (L), (m^{3}) \)								| Volume				&
		||
	enthalpy of formation,
	Solid to Liquid: Enthalpy of Fusion (Latent Heat of Fusion), Enthalpy of Freezing (Latent Heat of Freezing)
	Liquid to Gas: Enthalpy of Vaporization (Latent Heat of Vaporization), Enthalpy of Condensation (Latent Heat of Condensation)
Entropy
	\[ S = k_B \ln(\Omega) \]
		\Omega Number of States
	Entropy is more the number of states than whatever "randomness" is.
	Maximized 
Constant Processes
	Adiabatic Process: no heat exchange, q = 0. \Delta E = W
	Isothermal Process: Constant Temperature \Delta T = 0.
		Latent Heat: Heat Transferred in Isothermal Processes, usually a phase transformation.
	Isobaric Process: Constant Pressure, W = P \Delta V.
	[Isochoric]("Isovolumetric") Process: volume is constant, W = 0. \Delta E = q

Internal energy
	Net mechanism goes to zero
	typically vibration, but also conduction
	

Fermi–Dirac Statistics
	Fermi-Dirac Distribution Function: \[ f(E)=\frac {1}{1+e^{(E -E_{F} )/kT}} \]
		||
		| f					| (unitless)		| Probability of an Energy Level being Occupied		&
		| E 				| (J)				| Energy											&
		| \( E_{F} \) 		| (J)				| Fermi Level										&
		| T					| (K) 				| Temperature										&
		| \( k_{B} = \frac{R}{N_{A}} =1.3806488 \times 10^{-23} \) = 1.3806488e-23	| \( (J K^-1) \)	| Boltzmann's Constant	&
		||
		Boltzmann Approximation