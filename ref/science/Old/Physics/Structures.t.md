#Structures


##Solid Matter



	
#Structures Phase
	[Heterogeneous](">1 phase, Composites")
		Colloids: Two Phase mixtures, <10um
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
