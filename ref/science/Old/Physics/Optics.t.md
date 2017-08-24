#Optics

Photons
	Electromagnetic Wave
	Energy: \[ E = hf \]
	\[ f \lambda = v= c \]
	Photon Production
		Blackbody --> continuous
		Excitation & Relaxation --> 
	*Massless*
Electrons

Charged Particle Optics
	Probe Size
	Ions
		Geiger-Marsden Experiment
			Alpha particles
			Gold Foil (to scatter)
			Florescence Screen
		Ion Backscattering
		Recoil: Displaces Lattice Atoms
		Sputtering: Removes target Atoms
		Implantation: Inserts Ions into Lattice
		(Secondary) Electron Emission
		PhotoEmission
	Common Ion Optics Systems
		Helium Ion Microscopes
		Mass Spectrometer
			Magnetic Sector 
			Quadrupole
		Linear Accelerator
		Cyclotron
		Common ELectron Optics Systems
			Cathode Ray Tube
			Electron Beam Evaporator
			Electron Scanning Microscopes
	Electron Optics
		Common ELectron Optics Systems
			Cathode Ray Tube
			Electron Beam Evaporator
			Electron Scanning Microscopes
		Electron Beam Current: \[ n = i/e \]
			||
			| n		| (electrons/s)		| Number of Electrons	&
			| i		| (A)				| Beam Current			&
			||
			||
			| Charge of an Electron					|:	\( q_e = e =1.60217657 \times 10^{-19} (C) \)	:|:		(C)				:|:		1.60217657e-19	:&
			||

Filters
	Energy Separation
	Mass Separation
Aberration Correctors
Reflection/Reflectors (& Mirrors)
	Equal Angle: \[ \theta_{i} = \theta_{o} \]
Deflectors
Absorption/Emission
	Beer's Law
Dispersion: Splitting white light into different colors

Refraction (& Lenses)
	Glass (Optical) Lenses
		Index of Refraction: \[ n_{m,f} = \frac{c}{v_{m,f}} \]
		Optical Path: \[ \sum n_{i} d_{i} \]
			Fermat’s Principle: Path of shortest time. 
		Snell's Law [img](https://upload.wikimedia.org/wikipedia/commons/3/3f/Snells_law2.svg): \[ \sin(\theta_{1}) n_{1} = \sin(\theta_{2}) n_{2}  \]
		Lens Maker's Equation: \[ f^{-1} = (n-1)(R_{1}^{-1} - R_{2}^{-1}) + \frac{(n-1) d}{n R_{1} R_{2}}\]
			||
			| f					| (m)			| Focal Length					&
			| n					|				| Index of Refraction			&
			| R					| (m)			| Radius of Curvature			&
			| \( R^{-1} \)		| \((m^{-1})\)	| Curvature						&
			| d					| (m)			| Lens (Center) Thickness		&
			||
			Curvature's Sign-Concavity Convention:
				Negative: Circle drawn from left of lens center.
				Positive: Circle drawn from right of lens center.
			Thin Lens Approximation: \[ d = 0 \]
		Concavity
			Convex: Lens surface opposite side of drawn circle. (Positive Second Derivative)
			Concave: Lens surface on same side of drawn circle. (Negative Second Derivative)
			Meniscus: Opposite Concavity
		Converging (Positive): Collimated Light Converges (comes together).
		Diverging (Negative): Collimated Light Diverges (spreads apart).
		
	Electrostatic Lenses
		‎Einzel Lens
	Magnetic Lenses
	Imaging
		Focus Plane, not focal point.
		Thin Lens Formula: \[ f^{-1} = S_{1}^{-1} + S_{2}^{-1} \]
			||
			| f					| (m)			| Focal Length					&
			| S					| (m)			| Object/Image Length			&
			||
			*Newtonian* form: \[ x_{1} x_{2} = f^{2} \]
				\[ x_{1} = S_{1} - f \]
				\[ x_{2} = S_{2} - f \]
		Objects & Images (Real & Virtual)
Interference
	Constructive
	Destructive
Diffraction
	Kirchhoff-Fresnel Diffraction
	near-field diffraction
		Fresnel Diffraction
	[Fraunhofer Diffraction]("parallel and monochromatic, large distance to image plane")
		Single Slit Experiment [img](http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/imgpho/sinslit.gif)
		Cross Slit Experiment
		Double Slit Experiment
		Multi Slit Experiment
		Diffraction Grating
	Single Atom Scattering
	Compton Scattering
	Rutherford Scattering
		Conservation of momentum
		Direction of momentum changes
		heavy is essentially stationary
		\[ \frac{d \sigma}{d\Omega} = \frac{2 \pi b db}{ 2 \pi\sin(\theta) d\theta} \]
		b	(m)		Impact Parameter
	Center of mass should be the basis of the coordinate system
	Rayleigh Scattering^?
		\[ I_{s} = \frac{C I_{0]}{\lambda^4} \]
		Why the sky is blue.
	Mie Scattering^?
		Why Clouds are white.
	Bragg Scattering: \[ 2 d \sin(\theta) = z \lambda \]
		||
		| \( \theta \)		|		| Bragg Angle				&
		| \( \lambda \)		| (m)	| Wavelength				&
		| z					|		| Whole for constructive	&
		| d					| (m)	| [Distance between Planes]("Conventional planes lead to missing patterns.")	&
		||
		Assumptions: 
			Equivalent Planes of Atoms as Scattering Sites
			Specular Scattering from lattice planes.
				Specular: Angle of Incidence = Angle of Reflection 
				(i.e Flat Plane, with Reflections)
			Intensity from each plane is equal. 
				This works for things with long mean free paths.
				(Works with X-rays, but not low energy electrons)
			Kinematic Approximation
				Not Multiple Scatter Events
		Lattice Planes
	Atomic Scattering
		Plane-Wave Field (Complex Representation)
			Incoming Wave: \[ u = A e^{i(\vec{k}_{i} \cdot\vec{r} - \omega t)} \]
				||
				| A										|					| Amplitude							&
				| \( \vec{k} = \frac{2 \pi}{\lambda} \)	| \( (m^{-1}) \)	| Wave Vector						&
				| \( \vec{r} \)							| (m)				| Vector Radius (reference point)	&
				| \( \omega \)							| \( (s^{-1}) \)	| Angular Frequency					&
				| t										| (s)				| Time								&
				||
			(Single) Outgoing Wave: \[ u = f_e \frac{A}{D} e^{i(k D - \omega t)} \]
				||
				| A										|					| Amplitude							&
				| D										| (m)				| Radial Distance					&
				| \( f_e \)								| (m)				| Scattering Length of Electron		&
				| k										| \( (m^{-1}) \)	| Wave Number						&
				| \( \omega \)							| \( (s^{-1}) \)	| Angular Frequency					&
				| t										| (s)				| Time								&
				||
				Note for diffraction: \[ |k_i| = |k_o| \]
			(Double) Outgoing Wave: \[ u = f_e \frac{A}{D} e^{ikD} \left[ 1 + e^{i(\vec{r} \cdot \vec{s})} \right] \]
				\[ \delta = \vec{r} \cdot \vec{s} \]
				\[ \vec{s} = k (\hat{S} - \hat{S}_{i}) \]
				\[ |\vec{s}| = 2k \sin(\theta) \]
				Origin here is at first scatter
				Variables
					||
					| A										|					| Amplitude							&
					| D										| (m)				| Radial Distance					&
					| \( f_e \)								| (m)				| Scattering Length of Electron		&
					| k										| \( (m^{-1}) \)	| Wave Number						&
					| \( \vec{r} \)							| (m)				| Vector Radius						&
					| \( \vec{s} \)							| \( (m^{-1}) \)	| Scattering Vector 				&
					| \( \hat{S} \)							| 					| Wave Direction Vector 			&
					| \( \delta \)							| 					| Phase lag							&
					| \( \theta \)							|					| Half Scattering angle				&
					||
					Theta is consistence with Bragg.
			(Xth) Outgoing Wave: \[ u = f_e \frac{A}{D} e^{ikD} \sum_j e^{i(\vec{r}_{j} \cdot \vec{s})}  \]
				\[ f = f_e \sum_j e^{i(\vec{r}_{j} \cdot \vec{s})}  \]
				\[ I \propto N f_e^2 \]
				Variables
					||
					| A										|					| Amplitude							&
					| D										| (m)				| Radial Distance					&
					| \( f_e \)								| (m)				| Scattering Length of Electron		&
					| k										| \( (m^{-1}) \)	| Wave Number						&
					| \( \vec{r} \)							| (m)				| Vector Radius						&
					| \( \vec{s} \)							| \( (m^{-1}) \)	| Scattering Vector 				&
					| N										| 					| Number of scattering events		&
					| I										| 					| Intensity							&
					||
			Scattering From a Crystal: \[ f_{cr} = \sum f_a e^{i \vec{s} \cdot \vec{R}'_{i}} = \vec{F} \codt \vec{S} \]
				||
				| R'									| (m)				| Position of Atom				&
				||
				[Lattice Structure Factor]("Lattice Component"): \[ \vec{S}= \sum e^{i \vec{s} \cdot \vec{R}_{i}} = \prod_{j} \left[ \sum e^{i \vec{s} k \vec{a}_{j} } \right]  \]
					||
					| \[ \vec{R}_{i} = z_{1} \vec{r}_{1} 		+ z_{2} \vec{r}_{2}			+ z_{3} \vec{r}_{3}		\]							| 					| Lattice Vector				&
					||
				[Geometric Structure Factor]("Basis Component"): \[ \vec{F} = \sum f_a e^{i \vec{s} \cdot \vec{\delta}_{i} } \]
					||
					| \[ \delta = \sum x_i a_i \vec{i} \]		|					| Basis Vector			&
					| \( \vec{s} \)								| \( (m^{-1}) \)	| Scattering Vector 	&
					| \( f_a \)									| (m)				| Atomic Scattering Factor		&
					||
					Scattering Vector for Constructive Interference: \[ \vec{s} = \vec{R}^{*} \]
						After Simple Cubic Conversion: \[ \vec{F}_{h,k,\ell} = \sum f_a e^{i 2 \pi ( h x_{i} + k y_{i} + \ell z_{i}) } \]
							||
							| i		|		| Dummy Variable for [Bases](note.html?SolidStatePhysics.t.md).		&
							||
							Intensity: \[ F^{*} F \propto I \]
			Scattering from charge distribution: \[ f_a = \int \rho(\vec{r}) e^{i(\vec{r}_{j} \cdot \vec{s})} d^{3}r = \int_0^R 4\pi r^2 \rho(r) \frac{sin(sr)}{sr} dr \]
				||
				| \( f_a \)								| (m)			| Atomic Scattering Factor		&
				| R										| (m)			| Radius of Atom				&
				| \rho									| 				| charge distribution			&
				||
Channeling
	Can penetrate deep if you hit it at the right angle
	Important for implants (preventing it usually)
	leads to large contrasts in different crystalline alignments
Collisions
	[Elastic]("No Energy Loss") Scattering
		Usually one particle of significantly less mass.
	[Inelastic]("Energy Loss") Scattering
		Usually between particles of comparable mass.
		Stopping Power \[ S \equiv \frac{1}{N} \frac{dE}{dx} \]
			N = NUMBER OF ATOMS PER UNIT VOLUME 
			Nuclear (Inelastic Energy to lattice)
			Electronic (Energy to electrons)
		