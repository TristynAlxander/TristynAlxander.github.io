Continuum mechanics
	[Stress-Strain Curves](http://i.imgur.com/uUmUkiU.png)
		Regimes
			Elastic Regime
				Sometimes Hookean (Linear)
				Nearest-Neighbors: No Change
			Plastic Regime
				Nearest-Neighbors: Change
				Molecular Alignment
			Failure Regime
				Polymer Disentagnlement
				Bonds Breaking
		Toughness: Area Under Graph
			\[ \int \sigma \delta \varepsilon \]
		Stiffness: Slope of the Elastic Limit
		Extensibility: Total Length Along Strain
		Points
			Elastic (Proportionality) Limit
			Yield Strength
			Critical Stress 
			Ultimate Strength: Highest Point on the Graph
	Forces
		Tensile Forces: Anti-parallel, Out-of Surface
		Compressive Forces: Anti-parallel, Into Surface
		Shear Forces: Anti-parallel, Along Surface
	Strain
		\[ \varepsilon_E = \frac{\Delta \ell}{\ell_i} = \lambda - 1 \]
		\[ \delta \varepsilon = \frac{\delta \ell}{\ell_i}) \]
		\[ \gamma = \frac{\Delta x}{l} \]
		\[ \lambda = l_f / l_i \]
		Variables
			||
			| \( \varepsilon_E \)		| unitless		| Engineering Strain					&
			| \( \varepsilon_T \)		| unitless		| True Strain							&
			| \( \gamma \)				| unitless		| Shear Strain							&
			| \( \lambda \)				| unitless		| Extension or Stretch Ratio			&
			| \( \Delta l \)			| (m)			| Change in Length						&
			| \( \Delta x \)			| (m)			| Change in Perpendicular Length		&
			| l							| (m)			| Original Length						&
			||
		Strain Tensor
	Stress
		\[ \sigma_E = \frac{F_i}{A_0} \]
		\[ \sigma_T = \frac{F_i}{A_i} \]
		\[ \tau = \frac{F_x}{A_l} \]
		Variables
			||
			| \( \sigma_E \)		| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Engineering Stress	&
			| \( \sigma_T \)		| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| True Stress			&
			| \( \tau \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Shear Stress			&
			| \( F_0 \)				| \( (N = kg m s^{-2}) \)					| Force at time 0		&
			| \( F_i \)				| \( (N = kg m s^{-2}) \)					| Force at time i		&
			| \( F_x \)				| \( (N = kg m s^{-2}) \)					| Perpendicular Force	&
			| \( A_0 \)				| \((m^2)\)									| Area at time 0		&
			| \( A_i \)				| \((m^2)\)									| Area at time i		&
			||
	Moduli
		Compliance: Inverse of Moduli
		\[ \sigma = E \varepsilon \]
			||
			| \( \sigma \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress	&
			| \( \varepsilon \)		| unitless									| Strain	&
			| E						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus	&
			||
		Young's Modulus
			\[ E = \frac{\sigma_{i}}{\varepsilon_{i}} \]
				||
				| \( \sigma_{i} \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress along axis-i	&
				| \( \varepsilon_{i} \)		| untiless									| Strain along axis-i	&
				| E							| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Young's Modulus		&
				||
		Shear Modulus
			\[ G = \frac{\tau}{\gamma} \]
				||
				| G						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Shear Modulus			&
				| \( \tau \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Shear Stress			&
				| \( \gamma \)			| unitless									| Shear Strain			&
				||
		Bulk Modulus
			Has to do with Pressure.
	Mechanical Systems
		Spring (Elastic, Recoverable) Systems
			\[ \varepsilon = D \sigma \]
			\[ \sigma = E \varepsilon \]
			Variables
				||
				| \( \sigma \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)			| Stress		&
				| \( \varepsilon \)		| unitless										| Strain		&
				| D						| \( (N^{-1} m^{2}) = (kg^{-1} m^{1} s^{2}) \)	| Compliance	&
				| E						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)			| Modulus		&
				||
			Electrical Familiar: Resistor
		Dashpot (Viscous, Non-Recoverable) Systems
			\[ \sigma = \eta \dot{\varepsilon} \]
				||
				| \( \sigma \)				| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress		&
				| \( \dot{\varepsilon} \)	| \( s^{-1} \)								| Strain Rate	&
				| \( \eta \)				| \( (kg m^{-1} s^{-1}) \)					| Viscosity		&
				||
			Electrical Familiar: Capacitor
		Spring-Dashpot (Viscoelastic) Systems
			||
			| 							|: Series (Maxwell)													:|: Parallel (Voigt)											:&
			| Constitutive Behavior 	|: \[ \sigma_i = \sigma_j \]										:|: \[ \varepsilon_i = \varepsilon_j \]							:&
			| Constitutive Behavior 	|: \[ \dot{\varepsilon}_T = \sum \dot{\varepsilon}_i \]				:|: \[ \sigma_T = \sum \sigma_i \]								:&
			| Relaxation				|: \[ G(t) = E e^{-t/\tau} \] [*](http://i.imgur.com/05mf4oA.png)	:|: \[ G(t=\infty) = E \]										:&
			| Creep						|: \[ C(t) = D \left( 1 + \frac{t}{\tau} \right) \]					:|: \[ C(t) = D \left( 1 - e^{-t/\tau} \right) \]				:&
			| Compliance (1) Derivative	|: \[ C'(t) = D \]													:|: \[ C'(t)  = D \frac{1}{1 + (\omega \tau)^2} \]				:&
			| Compliance (2) Derivative	|: \[ C''(t) = D \frac{1}{\omega \tau} \]							:|: \[ C''(t) = D \frac{\omega \tau}{1 + (\omega \tau)^2} \]	:&
			| Modulus (1) Derivative	|: \[ G'(t) = E \frac{(\omega \tau)^2}{1 + (\omega \tau)^2} \]		:|: \[ G'(t) = E \]												:&
			| Modulus (2) Derivative	|: \[ G''(t) = E  \frac{\omega \tau}{1 + (\omega \tau)^2} \]		:|: \[ G''(t) = E \omega \eta \]								:&
			| Compounded 				|: \[ C = \sum C_i \]												:|:	\[ G = \sum G_i \]											:&
			||
			Variables
				\[ \tau = \eta / E \]
				||
				| \( \tau \)				| (s)											| Time Constant		&
				| \( \eta \)				| \( (kg m^{-1} s^{-1}) \)						| Viscosity			&
				| E							| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)			| Modulus			&
				| D							| \( (N^{-1} m^{2}) = (kg^{-1} m^{1} s^{2}) \)	| Compliance		&
				| t							| (s)											| Time				&
				| G							| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)			| Modulus			&
				| C							| \( (N^{-1} m^{2}) = (kg^{-1} m^{1} s^{2}) \)	| Compliance		&
				| \( \sigma \)				| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)			| Stress			&
				| \( \varepsilon \)			| unitless										| Strain			&
				| \( \dot{\varepsilon} \)	| \( s^{-1} \)									| Strain Rate		&
				| \( \dot{\sigma} \)		| \( (N m^{-2}) = (kg m^{-1} s^{-3}) \)			| Stress Rate		&
				||
			Series (Maxwell)
				Spring: Short Term
				Dashpot: Long Term
				Obvious Derivations
					Strain Rate: \[ \dot{\varepsilon} = \frac{\dot{\sigma}}{E} + \frac{\sigma}{\eta} \] 
						||
						| \( \dot{\varepsilon} \)	| \( s^{-1} \)								| Strain Rate	&
						| \( \dot{\sigma} \)		| \( (N m^{-2}) = (kg m^{-1} s^{-3}) \)		| Stress Rate	&
						| E							| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus		&
						| \( \sigma \)				| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress		&
						| \( \eta \)				| \( (kg m^{-1} s^{-1}) \)					| Viscosity		&
						||
					Strain: \[ \varepsilon = \frac{\sigma}{E} + \frac{\sigma}{\eta}t = \frac{\sigma}{E} \left( 1 + \frac{t}{\tau} \right) \]
						At Constant Stress
						\[ \tau = \eta / E \]
						||
						| \( \tau \)			| (s)										| Time Constant	&
						| \( \eta \)			| \( (kg m^{-1} s^{-1}) \)					| Viscosity		&
						| E						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus		&
						| t						| (s)										| Time			&
						| \( \sigma \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress		&
						| \( \varepsilon \)		| unitless									| Strain		&
						||
					Stress: \[ \sigma(t) = \sigma_0 e^{-t/\tau} \]
						At Constant Strain
						||
						| \( \tau \)			| (s)										| Time Constant	&
						| \( \eta \)			| \( (kg m^{-1} s^{-1}) \)					| Viscosity		&
						| E						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus		&
						| t						| (s)										| Time			&
						| \( \sigma \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress		&
						||
			Parallel (Voigt)
				Spring: Long Term
				Dashpot: Short Term
				Obvious Derivations
					Stress: \[ \sigma(t) = \varepsilon E + \eta \dot{\varepsilon} \]
						||
						| \( \dot{\varepsilon} \)	| \( s^{-1} \)								| Strain Rate	&
						| \( \varepsilon \)			| unitless									| Strain		&
						| E							| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus		&
						| \( \sigma \)				| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress		&
						| \( \eta \)				| \( (kg m^{-1} s^{-1}) \)					| Viscosity		&
						||
					Strain: \[ \varepsilon(t) = \frac{\sigma}{E} \left( 1 - e^{-t/\tau} \right) \]
						||
						| \( \tau \)			| (s)										| Time Constant		&
						| \( \eta \)			| \( (kg m^{-1} s^{-1}) \)					| Viscosity			&
						| E						| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Modulus			&
						| t						| (s)										| Time				&
						| \( \varepsilon \)		| unitless									| Strain			&
						| \( \sigma \)			| \( (N m^{-2}) = (kg m^{-1} s^{-2}) \)		| Stress			&
						||
			Dynamic Properties
				\[ \varepsilon (t) = \varepsilon_0 \sin(\omega t) \]
				\[ \sigma (t) = \sigma_0 \sin(\omega t+ \delta) \]
				Spring
					\[ \varepsilon (t) = \varepsilon_0 \sin(\omega t) \]
					\[ \sigma (t) = E \varepsilon_0 \sin(\omega t) \]
				Dashpot
					\[ \varepsilon (t) = \varepsilon_0 \sin(\omega t) \] 
					\[ \sigma (t) = \eta \varepsilon_0 \omega \cos(\omega t) \]
			Joel_R._Fried_Polymer_Science_and_Technology__1995.pdf
			page 129