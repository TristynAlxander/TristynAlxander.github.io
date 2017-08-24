#Wafer Fabrication

Energy Band Theory
	Energy Diagram (E-x) [img](http://i.imgur.com/QnQe0kh.png)
		Band Bending: \[ \varepsilon = - \frac{dV}{dx} = \frac{1}{q} \frac{dE_{c}}{dx} \]
	

	Fermi-Level: E_F
		Note: Fermi-Level isn't the Fermi-Energy.
		Fermi-Level: Common Reference Energy Level.
		Thermodynamic work required to add one electron to the body
		Constant at Thermal Equilibrium: \[\frac{d E_{F}}{dx} = 0\]
		Fermi-Dirac Distribution Function: \[ f(E)=\frac {1}{1+e^{(E -E_{F} )/kT}} \]
			||
			| f					| (unitless)		| Probability of an Energy Level being Occupied		&
			| E 				| (J)				| Energy											&
			| \( E_{F} \) 		| (J)				| Fermi  Level								&
			| T					| (K) 				| Temperature										&
			| \( k_{B} = \frac{R}{N_{A}} =1.3806488 \times 10^{-23} \) = 1.3806488e-23	| \( (J K^-1) \)	| Boltzmann's Constant	&
			||
			Boltzmann Approximations: \[ E_{C} -3kT > E_F > E_V+3kT \]
				Occupancy Probability:
					\[ E-E_{F} >> kT, f \approx e^{-(E-E_{F})/kT} \]
					\[ E-E_{F} << -kT, f \approx 1-e^{(E-E_{F})/kT} \]
				
		Quasi Fermi Levels: Fermi-Level at Non-Thermal Equilibrium
			\[n = n_{i} e^{(F_{N} - E_{i})/kT}\]
			\[p = n_{i} e^{(E_{i} - F_{P})/kT}\]
		Intrinsic Fermi Level: \[ E_{i} \equiv \frac{E_{c} + E_{v}}{2} + \frac{kT}{2} \ln\left(\frac{N_{v}}{N_{c}}\right) \approx \frac{E_{c} + E_{v}}{2} \]
			Fermi-Level for an Intrinsic Semiconductor.
			Equations in an Intrinsic Semiconductor at Thermal Equilibrium: \[ E_{i} = E_{F} \]
				\[ n = N_{c} = n_{i} = p = N_{v} \]
	
	*Real* Band Structures (E-k Diagram)
		
Dopants & Carriers
	Law of Mass Action: \[ np = n_{i}^{2} \]
		At Thermal Equilibrium
		||
		| \( n \)			| \( (cm^{-3}) \)	| Electron Concentration	&
		| \( p \)			| \( (cm^{-3}) \)	| Holes Concentration		&
		| \( n_{i} \)		| \( (cm^{-3}) \)	| Intrinsic Concentration	&
		||
	Charge Neutrality Condition: \[ N_D + p = N_A + n \]
		||
		| \( n \)			| \( (cm^{-3}) \)	| Electron Concentration		&
		| \( p \)			| \( (cm^{-3}) \)	| Holes Concentration			&
		| \( N_{D} \)		| \( (cm^{-3}) \)	| Ionized Donor Concentration	&
		| \( N_{A} \)		| \( (cm^{-3}) \)	| Ionized Acceptor Concentration	&
		||
	Density of States: 
		\[ g(E) = 
			\left\{
			\begin{matrix}
			E \geq E_{c} & , & g_{c}(E) = \frac{m^{*}_{n} \sqrt{2 m^{*}_{n} (E-E_{c}) } }{\pi^2 \hbar^3} \\ 
			E \leq E_{v} & , & g_{c}(E) = \frac{m^{*}_{p} \sqrt{2 m^{*}_{p} (E_{v}-E) } }{\pi^2 \hbar^3}
			\end{matrix}
			\right.
			\]
			||
			| E 				| (J)				| Energy								&
			| \( E_{c} \)		| (J)				| Conduction Band Energy				&
			| \( E_{v} \)		| (J)				| Valence Band Energy					&
			| \( m^{*}_{n}\)	| (kg)				| Effective Mass of Electron			&
			| \( m^{*}_{p}\)	| (kg)				| Effective Mass of Hole				&
			| g(E) 				| \( (cm^{-3}) \)	| Density of States						&
			| g_{c}(E) 			| \( (cm^{-3}) \)	| Density of States in Conduction Band	&
			| g_{v}(E) 			| \( (cm^{-3}) \)	| Density of States in Valence Band		&
			| \(\hbar = \frac{h}{2\pi} = 6.582119514 \times 10^{-16} \) =  6.582119514e-16	| (eV s)	| Reduced Planck's Constants	&
			| \(\hbar = \frac{h}{2\pi} = 1.054571800 \times 10^{-34} \) =  1.054571800e-34	| (J s)		| Reduced Planck's Constants	&
			||
	Charge Carriers
		Charge-Carrier Concentrations: 
			Non-degeneratively doped, Thermal Equilibrium, Charge Neutrality, Above Freeze Out
			||
			|:	Condition							:|:	n																							:|:	p																						:|:		\(n_i\)					:&
			|	\[ N_D >> N_A \]					|	\[ n \approx N_D \]																			|	\[p \approx n_{i}^{2} / N_{D}\]															| \[n_{i}^{2} = n p\]			&
			|	\[ N_A >> N_D \]					|	\[ n \approx n_{i}^{2} / N_{A} \]															|	\[p \approx N_{A}\]																		| \[n_{i}^{2} = n p\]			&
			|										|	\[ n = \frac{N_{D}-N_{A}}{2} \sqrt{\left(\frac{N_{D}-N_{A}}{2}\right) +n_{i}^{2}} \]		|	\[ p = \frac{N_{A}-N_{D}}{2} \sqrt{\left(\frac{N_{A}-N_{D}}{2}\right) +n_{i}^{2}} \]	| \[n_{i}^{2} = n p\]			&
			|	\[ E_{C} -3kT > E_F > E_V+3kT \]	|	\[ n = n_{i} e^{(E_{F} - E_{i})/kT} \\ n = N_{c} e^{-(E_{c} - E_{F})/kT} \]					|	\[ p = n_{i} e^{(E_{i} - E_{F})/kT} \\ p = N_{v} e^{-(E_{F} - E_{v})/kT} \]				| \[ n_{i} = \sqrt{N_{c} N_{v}} e^{-E_{G}/2kT} \]	&
			||
			Electron Concentration: \[ n = \int _{E_{c}}^{\text{Top }E_{c}} g_{c}(E) f(E) dE = N_{c} e^{-(E_{c} - E_{F})/kT} \]
				\[ N_{c} = 2 \left( \frac{2 \pi m_{n}^{*} k T}{h^2} \right)^{3/2} \]	Effective Density of States
				Freeze Out: \sqrt{\frac{N_{c} N_{v}}{2}} e^{-(E_{c} - E_{d})/2kT}
			Hole Concentration: \[ p = \int _{\text{Bottom }E_{v}}^{E_{v}} g_{v}(E) [1-f(E)] dE = N_{v} e^{-(E_{F} - E_{v})/kT}\]
				\[ N_{v} = 2 \left( \frac{2 \pi m_{p}^{*} k T}{h^2} \right)^{3/2}\]		Effective Density of States
			Intrinsic Concentration: 
				Requires Boltzmann Approximations: \[ E_{C} -3kT > E_F > E_V+3kT \]
		Excessive Carrier Concentrations
			\[ \Delta p = p - p_{0} \]
			\[ \Delta n = n - n_{0} \]
			Charge Neutrality: \[ \Delta p = \Delta n \]
			Low-Level Injection: Majority carrier not significant change, minority big change.
		Minority subscript majority
		Electrons
			From Donors
			Real Particle
		Holes
			From Acceptors
			Virtual Particle: 
				Context: Sea of Electrons
				Concept: Lack Electron
	Types of Materials
		Insulator: Large Band Gap
			Insulator: High Resistivity
		Semiconductor: Small Band Gap
		Metal: No or extremely small band gap.
			Conductor: Low resistivity
	Degenerative Doping
		n+: \[ E_{F} \approx E_{C} \]
		p+: \[ E_{F} \approx E_{V} \]
		Band Gap Narrowing
			\[ \Delta E_{G} \approx 3.5 \times 10^{-8} N^{1/3} \sqrt{\frac{300}{T}} \]
			dopants wave equations over lap
			dopants create there own bands (rather than simple levels)
	Recombination
		Direct
		R-G Center
		Auger
	Generation
		Band-to-Band
		R-G Center
		Impact Ionization

Carrier Movement
	Current:
		||
		|: Current (per Area)	:|: via Drift						:|: via Diffusion					:&
		|: \[ J_{N} = \]		:|: \[ q n \mu_{n} \varepsilon \]	:|: \[ + q D_{N} \frac{dn}{dx} \]	:&
		|: \[ J_{P} = \]		:|: \[ q p \mu_{p} \varepsilon \]	:|: \[ - q D_{P} \frac{dp}{dx} \]	:&
		||
		Drift
			Mobility: \[ \mu \equiv \frac{q \tau_{m}}{m^{*}} \]
			Drift Velocity: \[ v_{D} = \mu E \]
			Momentum: \[ p = v m^{*} = E \tau q\]
		Diffusion
			Einstein Relationship: \[ D = \frac{kT}{q} \mu \]
			Thermal Velocity: \[ \frac{3}{2}kT = \frac{m^{*}_{n} v_{th}^{2}}{2}\]
			Mean Free Path & Time: v_{T} = \frac{\ell}{\tau}
		Note: \[ \sigma = \frac{J}{\varepsilon}\]
	Continuity Equations
		||
		|: Concentration Continuity						:|: Drift \& Diffusion							:|: RG-Centers							:|: Light		:&
		|: \[ \frac{\partial n}{\partial t} = \]		:|: \[ \frac{1}{q}\frac{\partial J_{N}}{dx} \]	:|: \[ - \frac{\Delta n}{\tau_{n}} \]	:|: \[+G_{L}\]	:&
		|: \[ \frac{\partial p}{\partial t} = \]		:|: \[ -\frac{1}{q}\frac{\partial J_{P}}{dx} \]	:|: \[ - \frac{\Delta p}{\tau_{p}} \]	:|: \[+G_{L}\]	:&
		||
		Minority Continuity Equations
			||
			|: Concentration Continuity								:|: Diffusion														:|: RG-Centers							:|: Light		:&
			|: \[ \frac{\partial \Delta n_{p}}{\partial t} = \]		:|: \[ D_{N} \frac{\partial^{2} \Delta n_{p}}{\partial x^{2}} \]	:|: \[ - \frac{\Delta n}{\tau_{n}} \]	:|: \[+G_{L}\]	:&
			|: \[ \frac{\partial \Delta p_{n}}{\partial t} = \]		:|: \[ D_{P} \frac{\partial^{2} \Delta p_{n}}{\partial x^{2}} \]	:|: \[ - \frac{\Delta p}{\tau_{p}} \]	:|: \[+G_{L}\]	:&
			||
			Minority Carrier Diffusion Length: \[ L = \sqrt{D \tau} \]
			Minority Carrier (Recombination) Lifetime:\[\tau \equiv (c N_{T})^{-1}\]
				\tau		Lifetime
				N_{T}		Trap Concentration
				c			constant
	Carrier Scattering
		Phonon Scattering
			Lattice Vibrations
			Dominant at high temperatures. 
		Impurity (Dopant) Ion Scattering
			Impurities, such as dopants
			Dominant at low Temperatures.
			\[ \mu_{\text{impurity}} \propto \frac{T^{3/2}}{N_{A}+N_{D}} \]
		Charge-charge scattering
			Requires extremely high carrier concentration
		Matthiessen's Rule
			\[ \mu_{T}^{-1} = \sum \mu_{i}^{-1} \]
			\[ \tau_{T}^{-1} = \sum \tau_{i}^{-1} \]
Semiconductors
	Silicon Semiconductors
		Crystal
			Diamond Cubic Structure
			4 atoms at (0,0,0)+ FCC translations
			4 atoms at (1/4,1/4,1/4)+FCC translations
			Bonding: Covalent
			Lattice Constant \( \vec{a} = 5.431 \AA \)
			Concentration: \( C = 5 \times 10^{22} \frac{\text{atoms}}{\text{cm}^3}\)
		Band Structure
			||
			| \( E_{g} = 1.12 \)	| (eV)	| Energy Band Gap			&
			| \( E_{c} \)			| (J)	| Conduction Band Energy	&
			| \( E_{v} \)			| (J)	| Valence Band Energy		&
			||
		Charge Carriers
			Effective Density of States
				||
				| \( N_{v} = 1.04 \times 10^19 \) = 1.04e19	| \( (cm^{-3}) \)	| Effective Density of States Valence		&
				| \( N_{c} = 2.8 \times 10^19 \) = 2.8e19	| \( (cm^{-3}) \)	| Effective Density of States Conduction	&
				||
			Effective Mass	
				||
				| \( m^{*}_{n}\) = 0.26 m_{0}	| (kg)				| Effective Mass of Electron			&
				| \( m^{*}_{p}\) = 0.39 m_{0}	| (kg)				| Effective Mass of Hole				&
				||
			Intrinsic Carrier Concentration: \[ n_i = 3.9 \times 10^{16} T^{3/2} e^{-\frac{0.605\text{ev}}{kT}} \text{cm}^{-3} \]
				\[ n_{i,(T=300K)} = 10^10 \]
				||
				| \(n_{i}\) | \( (cm^{-3}) \)	| Intrinsic Carrier Concentration	&
				| T			| (K)			 	| Temperature						&
				||
		Wafers
			Flat: {100}
			Notch: [011]
	Germanium Semiconductors
		Crystal
		Band Structure
			||
			| \( E_{g} = 0.67 \)	| (eV)	| Energy Band Gap			&
			| \( E_{c} \)			| (J)	| Conduction Band Energy	&
			| \( E_{v} \)			| (J)	| Valence Band Energy		&
			||
	GaAs Semiconductors
		Crystal
			ZnS (Zinc Blend) Structure
			4 Ga atoms at (0,0,0)+ FCC translations
			4 As atoms at (1/4,1/4,1/4)+FCC translations
			Bonding: covalent, partially ionic
		Band Structure
			||
			| \( E_{g} = 1.42 \)	| (eV)	| Energy Band Gap			&
			| \( E_{c} \)			| (J)	| Conduction Band Energy	&
			| \( E_{v} \)			| (J)	| Valence Band Energy		&
			||
	Types of Semiconductors
		Elemental Semiconductor vs Compound Semiconductors
		Group-4 Semiconductor: Group 14
			Si
			SiC
		3-5 Semiconductors: Groups 13 and 15
			GaAs
.
Effective Mass
	Cyclotron Resonance Technique
		\[ f_{cr} = \frac{v}{2 \pi r} = \frac{q B}{2 \pi m_{n}} \]
			||
			| \( f_{cr} \)					| \( (s^{-1}) \)		| Cyclotron Resonance Frequency		&
			| \( \vec{v} \)					| \( (m s^{-1}) \)		| Velocity							&
			| \( \vec{r} \)					| \( (m) \)				| Radius							&
			| q								| (C) 					| Charge							&
			| \( \vec{B} \)					| (T)					| Magnetic Field					&
			| \( m^{*}_{n}\) = 0.26 m_{0}	| (kg)					| Effective Mass of Electron		&
			||
		Electrons absorb Microwaves at \( f_{cr} \)
