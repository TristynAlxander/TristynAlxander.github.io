#Solid State Physics
(Crystalline)

##Thermal Properties
	Heat Capacity
		Phonons: Ion Oscillation
			Energy: \[ \varepsilon_{phonon} = \hbar \omega\]
			Minimum Wavelength: \[ \frac{|\vec{G}|}{2} = \frac{2 \pi}{\lambda_{min}} \]
			Optical
			Acoustic
		Electron Energy
		\[ \omega = \frac{2pi}{\lambda} \]
		Einstein Model
		Debye Model
			\[ \int_{0}^{\omega_{D}} g(\omega) d\omega = N_{A} b \]
			Density of States: \[ g_{\#_{D.o.F.}}(\omega) = \#_{D.o.F.} \frac{d}{dq}\left( \left[ \frac{L}{2 \pi} \right]^{b} r^b \right ) \frac{dq}{d\omega} \]
				||
				| \( \#_{D.o.F.} \)		|		| Degrees of Freedom			&
				| q						|		| Wave Number					&
				| b						|		| Number of Dimensional Basis	&
				| r						| (m)	| Length						&
				| \(\omega_{D}\)		|		| Frequency						&
				||

+##Electrical Properties
	Drude Model
		Assumptions:
			Independent Electron Approximation: Neglecting electron-electron collisions/interactions
			Free Electron Model: Neglect ion-electron interactions
				Kinetic Theory of Gases applied to electrons in the metal
				+Valence Electrons: 
					Loosely Bound Electrons
					Electrons in Partially Filled Shells
					*Free* Electrons
				+Core Electrons: 
					Closed Shell Electrons
					Electrons Bound to Nuclei
					*Immobile* Electrons
			Collisions as Instantaneous: Random change in direction of motion
			Collision Probability (per unit time): \[ P = \frac{1}{\tau} \]
				||
				| \( \tau \)	| (s)		| Relaxation Time	&
				||
			Electrons Achieve Thermal Equilibrium though Collisions: \[ \bar{\varepsilon} = \frac{3kT}{2} \]
		||
		| z_{a} -z 		| number of core electrons		&
		| z				| number of valence electrons	&
		| z_{a}			| number of protons				&
		||
		Electron Density: \[ N = \frac{N}{V} = \frac{N_{a} z_{v} \rho}{A} \]
			||
			| N	| (electrons / cm3)		| Electron Density	&
			| \( z_{v} \)	| (electrons / atom)	| Valency	&
			| \( \rho \)	| \( (g cm^{-3}) \)		| Density	&
			| A				| (g / mol)				| Atomic Weight	&
			| \( N_{A} = 6.02214 \times 10^{23} (mol^{-1}) \) = 6.02214e23				| \( (mol^-1) \)	| Avogadro Constant		&
			||
		Conductivity: \[ \sigma = \frac{N e^2 \tau}{m^{*}} \]
			||
			| N	| (electrons / cm3)		| Electron Density	&
			| \( q_e = e = 1.60217657 \times 10^{-19} \) = 1.60217657e-19	| (C)				| Elementary Charge				&
			| \( \tau \)	| (s)		| Relaxation Time	&
			| \( m^{*} \)	| (kg)		| Effective Mass	&
			||
	Energy Band Theory
		Energy Diagram (E-x Diagram) [img](http://i.imgur.com/QnQe0kh.png)
			Energy
				||
				| 				| Valid Energies	| Location		&
				| Energy State:	| Discrete			| Discrete		&
				| Energy Level:	| Discrete			| Continuous	&
				| Energy Band:	| Continuous		| Continuous	&
				||
				Energy Bands
					-Conduction Band: [Energy Band above Fermi-Energy.]("Lowest Empty Energy Level (@T=0K), and above.")
						Conduction Electron: Any Electron above Fermi-Level (\( E_{F} \))
					-Valence Band: [Energy Band below Fermi-Energy.]("Highest Filled Energy Level (@T=0K), and below.")
						Valence Electron: Any Electron below Fermi-Level (\( E_{F} \))
					Energy Gap: \[ E_{g} = E_{c}-E_{v} \]
						Energy to Promote an electron from the Valence Band to Conduction Band.
						*Energy Band* between Conduction and Valence Bands.
						Continuous Range of invalid Energies, not Energy Band.
						||
						| Material Class		| Energy Gap				&
						| Metal					| [None]("Partially filled band at Fermi-Energy.")				&
						| Semi-Conductors		| Small						&
						| Isolator				| Large						&
						||
						Perfect Conductor^?
						Super Conductor^?
				Energy Levels
					Fermi-Level \( E_{F} \): [(Possible)]("May not be a valid Energy") Energy Level with [50%]("Probability") occupancy. 
					Fermi-Energy: Fermi-Level [(@T=0K)]("Without Kinetic Energy").
						\[ E_{F} = \frac{\hbar^{2}}{2 m^{*}} \left( 3 \pi^{2} N \right)^{2/3} \]
						\[ E_{F} = \frac{\hbar^2 k_{F}^{2} }{2m^{*}} = \frac{v_{F}^{2} m^{*}}{2} \]
							||
							| \(\hbar = \frac{h}{2\pi} = 1.054571800 \times 10^{-34} \) =  1.054571800e-34	| (J s)		| Reduced Planck's Constants	&
							| \(\hbar = \frac{h}{2\pi} = 6.582119514 \times 10^{-16} \) =  6.582119514e-16	| (eV s)	| Reduced Planck's Constants	&
							| \( \eta \)	| (electrons / cm3)		| Electron Density	&
							||
					Conduction Level \(E_{c}\): Lowest Empty Energy Level (@T=0K).
					Valence Level \(E_{v}\): Highest Filled Energy Level (@T=0K).
					Donor Level: Energy Level of Donor Electrons from Dopants
						Donor Ionization Energy: \[ E_{c} - E_{D} \]
					Acceptor Level: Energy Level of Acceptor Holes from Dopants
						Acceptor Ionization Energy: \[ E_{A} - E_{v} \]
				Other Energies
					Work Function: Minimum Energy to release an electron from the surface of a metal by a photon.
					Ionization Energy (Not a Solid State Physics Topic):  energy required to remove the most loosely bound electron, the valence electron, of an isolated gaseous atom
		*Real* Band Structures (E-k Diagram)
			Direct vs.Indirect Band Gap
				Direct: Photon 
				Indirect: Phonon and Photon

+##Crystallography
	[Crystalline Material Reference](../5_Ref/CrystallineMaterialReference.t.md)
	Mathematical Lattices & Atomic Bases 
		2-Dimensional Lattices:					\[ \vec{R}_{2} = z_{1} \vec{r}_{1}		+ z_{2} \vec{r}_{2}		\]
			2-Dimensional Reciprocal Lattices:	\[ \vec{R}^{*} = z_{1} \vec{r}^{*}_{1}	+ z_{2} \vec{r}^{*}_{2}	\]
				Unit Cells
					Wigner-Seitz Cell^?
						Create Lines connecting your lattice point to other local lattice points.
						Create normals lines/planes at the midpoint of each line.
						Select the smallest area/volume containing your lattice point.
					Properties
						Fills All Space: \[ A = |\vec{a} \times \vec{b}| \]
						Irrotational
						Non-Unique
					Conventional Unit Cell
						||
						| Crystal family (4)	| Bravais Lattices (5)		|: Conventional Cell Characteristics													:|:	Primitivized Cell Characteristics										:&
						| Monoclinic			| (Primitive) Oblique		|: \[ |\vec{a}| \neq	|\vec{b}|	\text{ and }	\theta \neq	\frac{\pi}{2}	\]		:|:	\[ |\vec{a}| \neq	|\vec{b}|		\text{ and }	\theta \neq	\frac{\pi}{2}	\]	:&
						| Orthorhombic			| (Primitive) Rectangular	|: \[ |\vec{a}| \neq	|\vec{b}|	\text{ and }	\theta =	\frac{\pi}{2}	\]		:|:	\[ |\vec{a}| \neq	|\vec{b}|		\text{ and }	\theta =	\frac{\pi}{2}	\]	:&
						| Orthorhombic			| Centered Rectangular		|: \[ |\vec{a}| \neq	|\vec{b}|	\text{ and }	\theta =	\frac{\pi}{2}	\]		:|:	\[ |\vec{a}| =		|\vec{b}|		\text{ and }	\theta \neq	\frac{\pi}{2}	\]	:&
						| Hexagonal				| (Primitive) Hexagonal 	|: \[ |\vec{a}| =		|\vec{b}|	\text{ and }	\theta =	\frac{2\pi}{3}	\]		:|:	\[ |\vec{a}| =		|\vec{b}|		\text{ and }	\theta =	\frac{2\pi}{3} \text{ or } \theta =	\frac{\pi}{3}	\]	&
						| Tetragonal			| (Primitive) Square		|: \[ |\vec{a}| =		|\vec{b}|	\text{ and }	\theta =	\frac{\pi}{2}	\]		:|:	\[ |\vec{a}| =		|\vec{b}|		\text{ and }	\theta =	\frac{\pi}{2}	\]	:&
						||
				Real Lattice to [Reciprocal Lattice]("virtual")
					||
					| Real Lattice		| Reciprocal Lattice		| Transformation	&
					| Square			| Square					| \[ \begin{matrix}
																		\vec{a} = a \hat{i} & \rightarrow & \vec{a}^{*} = \frac{2 \pi}{a} \hat{i} \\ 
																		\vec{b} = a \hat{j} & \rightarrow & \vec{b}^{*} = \frac{2 \pi}{a} \hat{j}  \\
																		\vec{c} = 1 \hat{k} & \rightarrow & \vec{c}^{*} = 2 \pi \hat{k} 
																		\end{matrix}\]	&
					| Rectangular		| Transposed Rectangular	| \[ \begin{matrix}
																		\vec{a} = a \hat{i} & \rightarrow & \vec{a}^{*} = \frac{2 \pi}{a} \hat{i} \\ 
																		\vec{b} = b \hat{j} & \rightarrow & \vec{b}^{*} = \frac{2 \pi}{b} \hat{j}  \\
																		\vec{c} = 1 \hat{k} & \rightarrow & \vec{c}^{*} = 2 \pi \hat{k} 
																		\end{matrix} \]	&
					| Hexagonal			| Transposed Hexagonal		| Transformation^?	&
					||
		3-Dimensional Lattices: 				\[ \vec{R}_{3} = z_{1} \vec{r}_{1} 		+ z_{2} \vec{r}_{2}			+ z_{3} \vec{r}_{3}		\]
			Unit Cells
				Properties
					Fills All Space (Parallelepiped): \[ V = \vec{a} \cdot ( \vec{b} \times \vec{c}) \]
					Irrotational
					Non-Unique
				||
				| Lattice Types						| Lattice point Locations.		&
				| Primitive (P)						| Corners only. (1 total)		&
				| Face Centered (A, bc-faces)		| Corners and bc-Face Centers.	&
				| Face Centered (B, ac-faces)		| Corners and ac-Face Centers.	&
				| Face Centered (C, ab-faces)		| Corners and ab-Face Centers.	&
				| All-Face Centered (F)				| Corners and Face Centers.		&
				| Body-Centered (I)					| Corners and Body Centers.		&
				||
				Conventional Cells
					||
					| Crystal System (7)		| Bravais Lattice (14)				| Conventional Cell Characteristics																				| Symmetry																	&
					| Triclinic					| Simple							| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha \neq \beta \neq \gamma \neq \frac{\pi}{2} \]			| One 2-fold Rotation axis													&
					| Cubic						| Primitive Cubic (P)				| \[ |\vec{a}| = |\vec{b}| = |\vec{c}|			\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Four 3-fold axes along (volume) diagonal.									&
					| Cubic						| Face-Centered Cubic (F)			| \[ |\vec{a}| = |\vec{b}| = |\vec{c}|			\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Four 3-fold axes along (volume) diagonal.									&
					| Cubic						| Body-Centered Cubic (I)			| \[ |\vec{a}| = |\vec{b}| = |\vec{c}|			\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Four 3-fold axes along (volume) diagonal.									&
					| Orthorhombic				| Primitive Orthorhombic (P)		| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Three mutually orthogonal 2-fold rotation axes along lattice vectors.		&
					| Orthorhombic				| Face-Centered Orthorhombic (F)	| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Three mutually orthogonal 2-fold rotation axes along lattice vectors.		&
					| Orthorhombic				| Base-Centered Orthorhombic (C)	| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Three mutually orthogonal 2-fold rotation axes along lattice vectors.		&
					| Orthorhombic				| Body-Centered Orthorhombic (I)	| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| Three mutually orthogonal 2-fold rotation axes along lattice vectors.		&
					| Tetragonal				| Primitive Tetragonal (P)			| \[ |\vec{a}| = |\vec{b}| \neq |\vec{c}|		\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| One 4-fold rotation axis along \(\vec{c}\)										&
					| Tetragonal				| Body-Centered Tetragonal (I)		| \[ |\vec{a}| = |\vec{b}| \neq |\vec{c}|		\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| One 4-fold rotation axis along \(\vec{c}\)										&
					| Monoclinic				| Primitive Monoclinic (P)			| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \frac{\pi}{2} \neq \gamma \]				| One 2-fold rotation axis.													&
					| Monoclinic				| Base-Centered Monoclinic (C)		| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \frac{\pi}{2} \neq \gamma \]				| One 2-fold rotation axis.													&
					| Hexagonal					| Primitive Hexagonal (P)			| \[ |\vec{a}| = |\vec{b}| \neq |\vec{c}|		\\	\alpha = \beta = \frac{\pi}{2}; \gamma = \frac{2\pi}{3} \]	| One 6-fold rotation axis along \(\vec{c}\)								&
					| Triclinic					| Primitive Triclinic (P)			| \[ |\vec{a}| \neq |\vec{b}| \neq |\vec{c}|	\\	\alpha = \beta = \gamma = \frac{\pi}{2} \]					| None.																		&
					| Trigonal (Rhombohedral)	| Primitive Trigonal (P)			| \[ |\vec{a}| = |\vec{b}| = |\vec{c}|			\\	\alpha = \beta = \gamma \neq \frac{\pi}{2} \]				| One 3-fold rotation axis.													&
					||
					Where:
						\[ \alpha = \text{angle}(\vec{c}, \vec{b}) \]
						\[ \beta = \text{angle}(\vec{a}, \vec{c}) \]
						\[ \gamma = \text{angle}(\vec{a}, \vec{b}) \]
				Non-Conventional Cells & Transformations
					||
					| Diamond Structure					| [FCC]("Face-Centered Cubic")		| [2 Atom Basis]("(x,y,z): (0,0,0); (1/4,1/4,1/4)")		&
					| Diamond Structure					| [SC]("Simple Cubic")				| [8 Atom Basis]("(x,y,z):(0,0,0); (1/2,1/2,0); (1/2,0,1/2); (0,1/2,1/2); (1/4,1/4,1/4); (3/4,3/4,1/4); (3/4,1/4,3/4); (1/4,3/4,3/4)")			&
					| Zinc Blende 						| [SC]("Simple Cubic")				| [8 Atom Basis]("(x,y,z): X(0,0,0); X(1/2,1/2,0); X(1/2,0,1/2); X(0,1/2,1/2); Y(1/4,1/4,1/4); Y(3/4,3/4,1/4); Y(3/4,1/4,3/4); Y(1/4,3/4,3/4)")	&
					| [FCC]("Face-Centered Cubic")		| [SC]("Simple Cubic")				| [4 Atom Basis]("(x,y,z): (0,0,0); (1/2,1/2,0); (1/2,0,1/2); (0,1/2,1/2);")		&
					| [BCC]("Body-Centered Cubic")		| [SC]("Simple Cubic")				| 2 Atom Basis		&
					| Rutile Structure					| Trigonal							| 2 Atom Basis?		&
					||
			3-Dimensional Reciprocal Lattices:	\[ \vec{R}^{*} = z_{1} \vec{r}^{*}_{1}	+ z_{2} \vec{r}^{*}_{2}		+ z_{3} \vec{r}^{*}_{3}	\]
				\[ [\vec{r}^{*}_{1} \vec{r}^{*}_{2} \vec{r}^{*}_{3} ]^{T} = (2 \pi) [\vec{r}_{1} \vec{r}_{2} \vec{r}_{3}]^{-1} \]
				\[ \vec{r}^{*}_{i} = \frac{2 \pi (\vec{r}_{i+1} \times \vec{r}_{i+2} )}{\vec{r}_{i} \cdot (\vec{r}_{i+1} \times \vec{r}_{i+2})} \]
				Real Lattice to [Reciprocal Lattice]("virtual")
					||
					| Real Lattice		| Reciprocal Lattice		| Transformation	&
					| FCC				| BCC						| Transformation	&
					| BCC				| FCC						| Transformation	&
					||
			Crystallographic Directions and Planes
				Crystallographic Direction: [a,b,c]
					Magnitude in the directions of \(\vec{a}\), \(\vec{b}\), and \(\vec{c}\).
					Multiply be Common Denominator (Must Be Integers).
				Crystallographic Plane (Miller Indices): \[ (h,k,\ell) \] 
					Find Intercepts in terms of basis.
					Invert Intercepts.
					Multiply be Common Denominator (Must Be Integers).
					Shortest Distance between Adjacent Lattice Planes
						Cubic: \[ d_{h,k,\ell} = \frac{n}{\sqrt{\frac{h^2}{|\vec{a}|^2} + \frac{k^2}{|\vec{b}|^2} + \frac{\ell^2}{|\vec{c}|^2}}} \]
							||
							| n				|	| Common Denominator	&
							| h				|	| Inverse of Intercepts	&  
							| k				|	| Inverse of Intercepts	&  
							| \( \ell \)	|	| Inverse of Intercepts	&  
							| \( \vec{a} \)	|	|						&
							||
				Direction and Plane Families
					Family of Directions: <a,b,c>
					Family of Planes: \[ \{h,k,\ell\} \]
					Symmetry via Lattice
				Negative Notation: \[ -1 = \bar{1} \]
			Lattice Packing
				Packing Fraction = Atom Volume / Cell Volume
				Close Packed (Geometric Packing)
					Face-Centered Cubic (FCC): ABCABC Stacking
					Hexagonal (HCP): ABABA Stacking
					Density: \[ \rho = \frac{\pi}{3 \sqrt{2}} \]
			Types of Symmetry
				Inversion Center: \[ R_n = -R_n \]
				Reflection Planes
				Rotation Axes
	Bonding in Crystals
		Metallic Bonding
			ion core (inert gas configuration)
			sea of electrons (charge, conduction electrons)
			malleable because they care more free to move
		Covalent
			sharing fo 2 electrons
			Math says wave functions have got to be symmetrical, so 2
				symmetric config, anti-symmetric config
				spin part is ant semetric, apcial is also anti, but spin dominates?
		Ionic Bond
			spacial case of covalent
			charge just drifts so much it "loses" (almost total shift) the electron
		vanderwals
			fluctuating dipole
		Hydrogen bonding