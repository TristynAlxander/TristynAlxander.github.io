#*Soft* Matter

##Polymer Crystals
	Crystalline Lamella
		Low Supersaturation: Larger Lamella
		High Supersaturation: Small Lamella
	\[ \Delta G = \frac{\Delta H \Delta T}{T_{m,A}} \]
		||
		| \( \Delta G \)						| \( (J), (kg m^{2} s^{-2}) \)		| Free Energy via Surface Fold Crystallization		&
		| \(\Delta T =  T_{m,A} - T_{m,C}\)		| (K)								| Undercooling needed for Crystalization			&
		| T_{m,A}								| (K)								| Melting Temperature for Amorphous					&
		| T_{m,C}								| (K)								| Melting Temperature for Crystalline				&
		| \Delta H								| \( (J), (kg m^{2} s^{-2}) \)		| Enthalpy											&
		||
	Lamellae Thickness: \[ t = \frac{2 \gamma T_{m,A}}{\Delta H \Delta T} = \frac{2 \gamma}{\Delta G} \]
			||
			| t										| \(( m) \)							| Lamella Thickness									&
			| \( \gamma \)							| \( (J m), (kg m^{3} s^{-2}) \)	| Constant											&
			| \Delta H								| \( (J), (kg m^{2} s^{-2}) \)		| Enthalpy											&
			| \(\Delta T =  T_{m,A} - T_{m,C}\)		| (K)								| Undercooling needed for Crystallization			&
			| T_{m,A}								| (K)								| Melting Temperature for Amorphous					&
			| T_{m,C}								| (K)								| Melting Temperature for Crystalline				&
			||
		Derivation
			\[ G_V ts = \gamma 2 s \]
				||
				| \(\Delta G \)			| \( (J), (kg m^{2} s^{-2}) \)						| Free Energy via Surface Fold Crystallization		&
				| t						| \(( m) \)											| Lamella Thickness									&
				| \( \gamma \)			| \( (J m), (kg m^{3} s^{-2}) \)					| Constant											&
				| s						| \( (m^2) \)										| Surface Area										&
				||
				Note: The Two is for two sides.
	Freezing: \Delta G = \frac{\Delta H}{T_{eq}} \Delta T
		\Delta T = T_{eq} - T 
	[Rate of Transformation](http://i.imgur.com/HwbOMaF.png)
		R_{1,2} = C e^{- \Delta G_{a} / k_{B} T}
		R_{2,1} = C e^{- ( \Delta G_{a} + \Delta G_{1,2} )/ k_{B} T}
	Melting Point Depression:
		\frac{\Delta T}{T_{eq}} = \frac{3 \gamma}{r \Delta H}
##Polymer Glasses
	Factors
		Cooling Rate
		Molecular Weight
		Branching
		Cross Linking
		Bond Flexibility
		Interchain Bonding
		Block vs Random Copolymerization
		Plasticizers: Concentration determines glassy vs rubbery (generally, small molecules)
	Optically Isotropic (typically transparent)
	Fox-Flory Relation:
		\( T_g = T_{g}^{\infty} + \frac{K}{M_n} \)
			||
			| T_g				| (K)		| Glass Transition Temperature											&
			| T_{g}^{\infty}	| (K)		| Glass Transition Temperature at infinite average molecular weight		&
			| K					| (K kg)	| Polymer Dependent Constant											&
			| M_n				| (kg)		| Number Average Molecular Weight										&
			||
	Systems of Mixtures
		High Concentrations (<1%)
			T_g = \sum W_i T_{g,i}
			||
			| T_g	| (K)			| Glass Transition Temperature	&
			| W		| (unitless)	| Weight Fraction				&
			||
		Low Concentrations (>1%)
			T_{g}^{-1} = \sum W_i T_{g,i}^{-1}
			||
			| T_g	| (K)			| Glass Transition Temperature	&
			| W		| (unitless)	| Weight Fraction				&
			||
	[HT/TS-Diagram](http://i.imgur.com/7RoOWo3.png)
		Below T_{g} or T_{m,c} solid.
		Above T_{m,A} Liquid
		Between T_{g} and T_{m,c} glass
		Between T_{g} and T_{m,A} elastic then liquid
Viscosity
	Relative Viscosity: \[ \eta_{rel} = \frac{\eta}{\eta_0} \]
	[Specific Viscosity]("Relative Viscosity Increment")
		\[ \eta_{i} = \eta_{sp} = \frac{\eta - \eta_0}{\eta_0} = \frac{t - t_0}{t_0} = \eta_{rel} - 1 \]
		\[ \eta_{sp,i} = [\eta]_i c_i \]
	Inherent Viscosity: \[ \eta_{inh} = \frac{\ln(\eta_{rel})}{c} \]
	Intrinsic Viscosity
		Mark-Houwink Equation: \[ [\eta] = K M_{V}^{\alpha} \]
			Viscosity Average Molecular Weight: \[ M_{V} = \sum w_{i} M_{i}^{\alpha} \]
				Weight fraction: \[ w_i = c_i / c \]
			If \( chi_{i,j}=1/2 \), then \( \alpha = 1/2 \)
		\[ \langle r^2 \rangle = \left( \frac{M [\eta]}{\Phi} \right)^{\frac{2}{3}} \]
	Huggins Equation: 
		\[ \frac{\eta_{sp}}{c}=[\eta] + k_{H} [\eta]^2 c \]
	Reduced viscosity: \[ \frac{\eta_{sp}}{c} \]
	Variables
		||
		| \( \eta_{rel} \)	| (?)		| Relative Viscosity					&
		| \( \eta_{i} \)	| (?)		| Specific Viscosity					&
		| \( \eta_{sp} \)	| (?)		| Specific Viscosity					&
		| \( \eta_{inh} \)	| (?)		| Inherent Viscosity					&
		| \( [\eta] \)		| (?)		| Intrinsic Viscosity					&
		| \( \eta_0 \)		| (?)		| Pure Solvent Viscosity				&
		| \( \eta \)		| (?)		| Solution Viscosity					&
		| t					| (s)		| Time									&
		| c					| (??)		| Concentration							&
		| K					| (??)		| Constant								&
		| \(\alpha\)		| (??)		| Constant								&
		| \(\chi\)			| (??)		| Flory Parameter								&
		| \( M_{V} \)		| (kg)		| Viscosity Average Molecular Weight	&
		| r					| (m)		| End-to-End Distance					&
		| \( \Phi \)		| \( 2.1 \pm 0.2 \times 10^{21} (dL mol-1 cm-3) \)		| Flory constant	&
		| \( k_{H} \)		| (?)		| Huggins coefficient					&
		||
Thermodynamic Activity
	Raoult's Ideal Solution Law: a = mol%
		||
		| a		| (unitless)	| Thermodynamic activity	&
		| mol%	| (unitless)	| Mole Fraction				&
		||
	\[ a = \frac{p_{c}}{p_{100\%}} \]
		||
		| a		| (unitless)	| Thermodynamic Activity	&
		| p		| (Pa)			| Partial Pressure			&
		||
	\[ ln(\alpha_i ) = \frac{ \Delta \mu_i }{kT} \]
	\[ \ln(a_i) = \ln(1 - \phi_j) + (1-1/r)\phi_j + \chi_{i,j} \phi_{j}^{2} \]
		Contribution by volume: \[ \ln(1-\phi) \]
		Contribution by Molecular Weight : \[ \left( 1-\frac{1}{r} \right)\phi \]
		Contribution by interactions:  \[ \chi \phi^2 \]
		||
		| a					| (unitless)	| Thermodynamic Activity					&
		| r					| (unitless)	| Number of Slovent equivelent Segments		&
		| \( \phi \)		| (unitless)	| Volume Fraction							&
		| \( \chi_{i,j} \)	| ()			| Flory Parameter							&
		||
	\[ \ln(a_i) = (\kappa_{i} + \psi_{i}) \phi_{j}^{2} \]
		||
		| a					| (unitless)	| Thermodynamic Activity			&
		| \( \phi \)		| (unitless)	| Volume Fraction					&
		| \( \kappa \)		| ()			| Enthalpic Parameter				&
		| \( \psi \)		| ()			| Entropic Paramete					&
		||
	\[ \ln(a_i) = \left( 1 - \frac{\theta}{T} \right) \phi_{j}^{2} \]
		\[ \theta = \frac{\kappa_i T}{\psi_i} \]
		||
		| a					| (unitless)	| Thermodynamic Activity			&
		| \( \phi \)		| (unitless)	| Volume Fraction					&
		| \( \theta \)		| (K)			| Flory Temperature					&
		| T					| (K)			| Temperature						&
		| \( \kappa \)		| ()			| Enthalpic Parameter				&
		| \( \psi \)		| ()			| Entropic Paramete					&
		||
Liquid Polymer Solutions
	Mechanical Properties of Polymers
		Short Term: Creep Modulus Independent of Degree of Polymerization
		Intermediate Term: Creep modulus Independent of Degree of Polymerization
		Long Term: Creep Modulus(Terminal Time ~ Degree of Polymerization^3.4)
	Entanglements
	\[ G = \frac{\rho R T}{M_c} \]
		||
		| \( \rho \)	| \( (kg m^{-3}) \)	| Density						&
		| M_c			| (kg)				| Mass between Entanglements	&
		| T				| (K)				| Temperature					&
		||
		||
		| Ideal Gas Constant		|: \(R = 8.3144621 (kg m^{2} s^{-2} mol^{-1} K^{-1}) \)		:|:	(kg m^2 s^-2 mol^-1 K^-1), (J mol^-1 K^-1)	:|:	8.3144621 :&
		||
	Random Walk Polymer Models
		Freely Jointed Chain Model 
			Fixed Length, Random Angles
			\[ \langle r \rangle = 0 \]
			Scaling Law 
				\[ \langle r^2 \rangle = N \ell^2 \]
				\[ r_{rms} = \ell \sqrt{N} \]
		Eyring Equation
			Fixed Length, Non-Random Angles
			\[ \langle r^2 \rangle = N \ell^2 \left[ \frac{1 + \cos(\theta)}{1 - \cos(\theta)} \right] \]
		Empirical Model
			\[ \langle r^2 \rangle = \frac{N}{g} \langle c^2 \rangle = N b^2 \]
			Excluded Volume Effect: \[ \langle r^2 \rangle = \alpha (N C_{\infty})^{1/2} \ell \]
			Characteristic Ratio
				\[ C_{\infty} = \frac{b^2}{\ell^2} \]
				Empirical Model over Free Model
				High: fairly straight.
				Small: tightly coiled.
			Chain Expansion Factor
				Empirical Model over Free Model
				\[ \alpha = \frac{(N b^2)^{1/2}}{(N \ell^2)^{1/2}} \]
		Variables
			||
			| r				| (m)			| End-to-End Distance		&
			| \( \ell \)	| (m)			| Fixed Bond Length			&
			| N				| (unitless)	| Chain Length				&
			| Nl			| (m)			| Contour Length			&
			| \(\theta\)	| (Radians)		| Free Rotation				&
			| C				| (unitless)	| Characteristic Ratio		&
			| \(\alpha\)	| (unitless)	| Chain Expansion Factor	&
			| b				| (m)			| Statistical Step Length	&
			| c				| (m)			| Characteristic Vector		&
			| g				| (unitless)	| Statistical Step Size		&
			| rms			| (unitless)	| Root Mean Square			&
			||
	Flory-Huggins Lattice
		Assumptions
			Uniform Segment Density
				Each site has same volume
				Each site has either monomer or solvent molecule
			No volume changes in mixing
			No Preferable Folding
		Number of Sites: \[ N_T = N_i + X N_{j} \]
		Volume Fractions: \[ \Phi_i = \frac{N_i}{N} \], \[ \Phi_{j} = \frac{X N_{j}}{N} \]
		Flory Parameter: \[ \chi_{i,j} = \frac{z \Delta \omega}{k_B T} \]
			\(\chi_{i,j} < 1/2\): Good solvent.
			\(\chi_{i,j} = 1/2\): Ideal random walk. (Theta Condition)
			\(\chi_{i,j} > 1/2\): Globule.
		Free Energy of Mixing: \[ \Delta G_m = k_{B} T \left[ n_i \ln(\Phi_i) + \sum_2^X n_{j,x} \ln(\Phi_{j,x}) + n_i \Phi_i \chi_{i,j} \right] \]
			Entropy of Mixing: \[ \Delta S_m = -k_B [n_i \ln(\Phi_{i}) + \sum_2^X n_{j,x} \ln(\Phi_{j,x})] \]
				Derivation
					\[ \Delta S = -k [n_i \ln(n_i / n_T) + n_{j} \ln( n_{j} / n_T )] \]
						||
						| \( ?_i \)	| (unitless)		| Constituents					&
						| \( ?_j \)	| (unitless)		| Solvent						&
						| \( ?_T \)	| (unitless)		| Solution						&
						| n			| (unitless)										| Number of Cases		&
						| \( k_{B} = \frac{R}{N_{A}} =1.3806488 \times 10^{-23} (J K^{-1}) \) 	|	(J K^-1)		| Boltzmann's Constant		&
						| S			| \( (J K^{-1}), (kg m^{2} s^{-2} K^{-1}) \)		| Entropy				&
						||
					\[ \Omega = \frac{n_i + n_{j}}{n_{i}! n_{j}!} \]
						||
						| \( ?_i \)		| (unitless)		| Constituents					&
						| \( ?_j \)		| (unitless)		| Solvent						&
						| n				| (unitless)		| Number of Cases				&
						| \( \Omega \)	| (unitless)		| Nummber of Arrangments		&
						||
			Enthalpy of Mixing: \[ \Delta H_m = N_i z \Phi_j \Delta \omega = k_B T N_i \Phi_j \chi_{i,j} \]
				\[ \delta \omega = \omega_{j,i} - (\omega_{i,i} + \omega_{j,j})/2 \]
				Total Number of Contacts: \[ x N_j z \Phi_i = N_i z \Phi_j \]
	Tube Wire Models
		Tube around Polmer
		Limmiting Factor is where the tube pinches
	Grass Snake Model
Liquid Crystals
	Friedelian Classes
		Nematic (0D)
			Liquid-Nematic Phase Transition
				Decreased Orientational Entropy
					Driven by either alignment or packing
					\[ \Delta S = -k \int f(\theta) ln[4 \pi f(\theta)] d\Omega \]
						||
						| S					| Entropy								&
						| \( f(\theta) \)	| Orientation distribution function		&
						| \( \Omega \)		| solid angle							&
						| k					| Boltzmann Constant					&
						||
		Smectic (1D-Sheets)
			Cholesteric: Director along plane
			Smectic A: Director Perpendicular to plane
			Smectic C: Director at Angle
		Discotic (2D-Shapes)
Sol: solid in liquid
	Gels
		Physical Gels
			Reversible, Thermodynamic
			Microphase Separation
				block co-polymers
				Ends Aggragate
			Microcrystalline Regions
		Chemical Gels
			Irreversible, Covalent Bonds
			Thermosetting Resins (epoxies)
				Resins (Often ending in reactive groups)
				Hardener (bind many Resins together)
			Sol-Gel Glasses
				silica (SiO) polymers
				Water
			Vulcanized Rubber
				High Molecular Weight Polymers
				Sulphur
		Gelification: Liquid-Like to Solid-Like
			Percolation Model: Random bonding, Cluster Growth, system spanning cluster
				Monte Carlo simulations
			Flory-Stockmayer Model
				Cayley Tree
					number of possible bonds = nodes * z / 2
					f = bonds / possible bonds
					f_c = (z-1)^{-1}
					\[ N_k = fz(fz-1)^{k-1} \]
					||
					| z		| Conections per node					&
					| k		| generation 					&
					| f		| fraction of reacted bonds		&
					| N		| number of bonds				&
					||
Aerosol: liquid or solid in gas
Emulsion: liquid in liquid
	Microemulsions: <100nm, Stable with surfactants
	Macroemulsions: >100nm, Unstable
	Destabilizing Processes
		Creaming
			Phases Layer
			Driver: density (Gravity)
		Inversion: 
			Internal/Externap Phase Swap
			Driver: Concentration
		Ostwald Ripening:
			Dropplets get smaller/larger
			Driver: surface curvature
		Flocculation: 
			Dropplets Aggragate (solvent with polymers that want more solvent)
			Driver: osmotic pressure (excluded volume)
		Coalesence: 
			Droplets combine
			Driver: surface tension
	Amphiphiles: Hydrophobic and Hydrophilic Ends
		surfactants (surface active agents)
			Lyophobic: Repeled from solvent
			Lyophilic: Attracted to solvent
		Aggragate Morphologies
			Spherical Micelles: \[ \frav{v}{\ell a} \leq 1/3 \]
				||
				| v			| Volume		&
				| \(\ell\)	| Chain Length	&
				| a			| Head Area		&
				||
			Cylinders: \[ 1/3 &lt; \frav{v}{\ell a} \leq 1/2 \]
			Bilayers: \[ 1/2 &lt; \frav{v}{\ell a} \]
			Vesicles
	Hamaker Constant:
		\[ U = \frac{-AR}{12h} \]
			Hamaker Constant: \[ A = 1.4\times10^{-19} (J) \]
			||
			| U		| (J)	| Attractive Energy		&
			| R		| (m)	| Radius				&
			| h		| (m)	| Seperation			&
			||
	The Double Layer
		Surface Charge | Ion Layer | Ion Layer
		\[ \psi = \psi_0 e^{-\kappa x} \]
		\[ \kappa = [X]^{-1/2}\]
		Variables
			||
			| \(\psi\)			| (J)		| Electrical Potential					&
			| \( \kappa^{-1} \) | (m)		| Debye Length (double layer thickness)	&
			| x					| (m)		| Distance								&
			| [X]				| ()		| Concentration							&
			||
Colloidal Crystals
	Stable: Net repulsive
	Unstable: Net Attractive
		Add salt, reducing Debye Length
		Add poor solvent, Flocculation
		Add polymer, Flocculation
		Depletion interactions: Remove solvent, Flocculation
	Typically 
		Driver: Entropy (Depletion Interactions)
		Close-packed