Configurational Notations
	Chemical Formula:  \[ n_z^a X_i^c \]
		||
		|n	|Stoichiometric Coefficient	&
		|X	|Elemental Symbol			&
		|a	|Mass Number				&
		|z	|Proton/Atomic Number		&
		|c	|Charge						&
		|i	|Number of Atoms			&
		||
	Empirical Formula: \[ C_1 H_2 O_1 \]
		Relative Numbers
			Minimized
			Whole
		Used for Ionic Crystals
			Algorithm: Binary Ionic Compounds
				\[ X^c + Y^d \rightarrow X_{|d|} Y_{|c|}  \]
				Divide by greatest common factor
	Molecular Formula: \[ C_6 H_12 O_6 (aq) \]
		Actual Numbers
		States: (g),(l),(aq),(s)
		Note: Molecular Mass to convert from Empirical
		Law of Definite Proportions: Molecules are defined by Molecular Formulas
	Structural Formulas
		Lewis's Dot Structures
			Shows Valence Electrons
		Kekule's Line-Bond Structures
		Condensed Structures
		Skeletal Structures
			Carbons and Hydrogens usually implied
			Other Atoms explicitly Stated
		Chemical Structure
			Constitutional/Structural Isomers: n - [name][subgroup]
				The #th carbon(s) in the chain have the subgroup.
			Poly([Monomer Name])
				n: number of monomers
				Carbon Numbering
				Carbon Lettering
					Alpha Carbons are carbons attached to substituents
					Lettering continues down substituent
				Parent Chain: Longest chain of consecutive carbon atoms.
		Perspective Drawing
			3D Position Indicated
			Carbons and Hydrogens always implied.
		Resonance Structures
			\[ \begin{bmatrix} X^c & \leftrightarrow & X^c\\ \updownarrow &  & \updownarrow \\ X^c & \leftrightarrow & X^c \end{bmatrix}^c \]
			X's: Different Structures ("resonance forms")
				Different forms only differ in pi-bonds or nonbonding pairs
				Atoms in Same Place in space
					Base Sigma bonds stay in tact
					Actual Hybridization can seem ambiguous
						Are electrons delocalized
					Not necessarily the way you initially imagine it
					Electrons start delocalized (think molecular orbitals)
					Keep same 3D Geometry whole time, but ambiguous when looking at 2 Structures
				Not Necessarily equivalent bond Structures
					Resonance forms obey normal rules of valency
					octet rule: Including Bonding Electrons, No more than 8 electrons in a valence band. (s^2 p^6)
					Formal Charge
					Aromacity
					CarboCations #of C
					
				Hybrid (of some percent) is more stable than either individual
					Though, Individuals might be more or less stable than each other
			Single-Line Arrow: Simultaneous Existances, not equilibrium.
			Brackets: Arround all potential Structures
			Charge: Total on brackets, but individual on atoms too.
			Double-Dagger: Iff transitions state.
			Resonance Hybrid: Dashed Lines for Delocalized Bonds
			Any Three consecutive p-orbitals (with at least one pi bond) has a resonance structure
			
			full arrow moves electron pair
			half arrow moves electron
			From Electrons to Orbitals
			
	3D Models
		Ball & Stick Model
		Space-Filling Model
		Ribbon Diagram


Transformations
	Activation
		Activation Energy
		Activated Complex (Unstable)
	Transition States: \[ [X]^{DDagger} \]
		Unstable
		Partial Charges: \[ \delta^{\pm} \]
		Parial Bonds: Dashed
	Intermediates
		Stable, not final.
	Redox Reactions
		Reduction: Gain Electrons; Lose RedOx. 
		Oxidation: Lose Electrons; Gain RedOx. 
		Oxidation-Reduction States
			if(Atom in Elemental Form){Redox_State = 0}
			else if (Atom is Monoatomic Ion){Redox_State = Charge}
			else if(Atom is Hydrogen){
				if(Atom binded to Nonmetal){Redox_State = 1}
				if(Atom binded to Metal){Redox_State = -1}
				}
			else if(Atom in Group1){Redox_State = 1}
			else if(Atom in Group2){Redox_State = 2}
			else if(Atom in Group17){Redox_State = -1}
			else if(Atom is Oxygen){
				if(Atom in Peroxide){Redox_State = -1}
				else{Redox_State = -2}
				}
			Sum(Redox_State_i) = Compound.Charge