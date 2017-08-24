#Kinematics

##Rotational Motion
	[Ark](http://i.imgur.com/E18yHXv.png): 
		\[ \vec{s} = \vec{\theta} \times \vec{r} \]
			||
			| \( \theta \)	| \( (^{(R)}) \)	| Angle 	&
			| s				| \( (m ^{(R)}) \)	| Ark		&
			| \( \vec{r} \)	| \( (m) \)			| Radius	&
			||
		Uniform Circular Motion (Circles): \( |\vec{r}| \) is constant
	[Velocity](http://i.imgur.com/VyDaV6k.png)
		Angular Velocity: \[ \vec{\omega} = \frac{d\theta}{dt}\hat{\theta} \]
			||
			| \( \vec{\omega} \)	| \( (^{(R)} s^{-1}) \)	| Angular Velocity	&
			| \( \theta \)	| \( (^{(R)}) \)				| Angle 			&
			| t				| (s)							| Time				&
			||
		Velocity Components: \[ \vec{v} = \vec{v}_{\parallel} + \vec{v}_{\perp} \]
			||
			| \( \vec{v} \)				| \( (m s^{-1}) \)		| Velocity					&
			| \( \vec{v}_{\parallel} \)	| \( (m s^{-1}) \)		| Parallel Velocity			&
			| \( \vec{v}_{\perp} \)		| \( (m s^{-1}) \)		| Perpendicular Velocity	&
			||
		Uniform Circular Motion: \[ \vec{v} = \vec{\omega} \times \vec{r} \]
			||
			| \( \vec{\omega} \)	| \( (^{(R)} s^{-1}) \)	| Angular Velocity	&
			| \( \vec{v} \)			| \( (m s^{-1}) \)		| Velocity			&
			| \( \vec{r} \)			| \( (m) \)				| Radius			&
			||
	[Acceleration](http://i.imgur.com/Gl0O3lS.png)
		Angular Acceleration: \[ \alpha_{a} = \frac{d \vec{\omega}}{d t} \]
			||
			| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)	| Angular Acceleration		&
			| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity			&
			| t							| (s)					| Time						&
			||
		Acceleration Components: \[ \vec{a} = \vec{a}_{r} + \vec{a}_{T} \]
			||
			| \( \vec{a} \)		| \( (m s^{-2}) \)	| Acceleration				&
			| \( \vec{a}_r \)	| \( (m s^{-2}) \)	| Radial Acceleration		&
			| \( \vec{a}_T \)	| \( (m s^{-2}) \)	| Tangential Acceleration	&
			||
		Uniform Circular Motion
			Tangential Acceleration: \[ \vec{a}_{T} =\vec{\alpha}_{a} \times \vec{r} \]
				||
				| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)	| Angular Acceleration		&
				| \( \vec{a}_T \)			| \( (m s^{-2}) \)		| Tangential Acceleration	&
				| \( \vec{r} \)				| \( (m) \)				| Radius					&
				||
			Radial Acceleration: \[ \vec{\alpha}_{r} = \frac{\vec{v}^{2}}{r} \hat{r} = \vec{\omega}^{2} \vec{r} \]
				||
				| \( \vec{a}_r \)			| \( (m s^{-2}) \)		| Radial Acceleration		&
				| \( \vec{r} \)				| \( (m) \)				| Radius					&
				| \( \vec{v} \)				| \( (m s^{-1}) \)		| Velocity					&
				| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity			&
				||
	Constant Angular Acceleration
		\[ \vec{\omega} = \vec{\omega}_{0} + \vec{\alpha}_a t \]
			||
			| t							| (s)					| Time					&
			| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity		&
			| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)	| Angular Acceleration	&
			| _0						| unitless				| Initial				&
			||
		\[ \theta = \theta_{0} + \vec{\omega}_{0}  t + \frac{\vec{\alpha}_a  t^{2} }{2} \]
			||
			| \( \theta \)				| \( (^{(R)}) \)		| Angle 				&
			| t							| (s)					| Time					&
			| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity		&
			| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)	| Angular Acceleration	&
			| _0						| unitless				| Initial				&
			||
		\[ \vec{\omega}^{2} - \vec{\omega}_{0}^{2} = 2  \vec{\alpha}_a ( \theta - \theta_{0} ) \]
			||
			| \( \theta \)				| \( (^{(R)}) \)		| Angle 				&
			| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity		&
			| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)	| Angular Acceleration	&
			| _0						| unitless				| Initial				&
			||
		\[ \theta-\theta_0 = \frac{(\vec{\omega} - \vec{\omega}_{0})  t}{2} \]
			||
			| \( \theta \)				| \( (^{(R)}) \)		| Angle 				&
			| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity		&
			| t							| (s)					| Time					&
			| _0						| unitless				| Initial				&
			||
	Angular Momentum
		\[ \vec{L} = \vec{r} \times \vec{p} \]
			||
			| \( \vec{r} \)				| \( (m) \)				| Radius				&
			| \( \vec{L} \)				| \( (J s) \)			| Angular Momentum		&
			| \( \vec{p} \)				| \( (kg m s^{-1}) \)	| Momentum				&
			||
		Uniform Circular Motion: \[ \vec{L} = I \vec{\omega} \]
				||
				| I							| \( (kg m^2) \)		| Moment of Inertia (Angular Mass)		&
				| \( \vec{L} \)				| \( (J s) \)			| Angular Momentum						&
				| \( \vec{\omega} \)		| \( (^{(R)} s^{-1}) \)	| Angular Velocity						&
				||
	Force
		Torque: \[ \tau = \vec{r} \times \vec{F} \]
			||
			| \( \tau \)		| \( ( J ^{(R^{-1})} ) \)	| Torque	&
			| \( \vec{r} \)		| \( (m) \)					| Radius	&
			| \( \vec{F} \)		| \( (N) = (kg m s^{-2}) \)	| Force		&
			||
			Dipole Moment: \[ \vec{\tau} = \vec{p} \times \vec{E} \]
				||
				| \( \vec{\tau} \)	| (N/m)						| Torque on Rigid Dipole	&
				| \( \vec{p} \)		| (C m)						| Electric Dipole Moment	&
				| E					| (N/C) = (V/m)				| Electric Field			&
				||
		Centripetal/Tangential Force: \[ F_{c} = m \alpha_{T} \]
			||
			| \( F_{c} \)	|	\( (^{(R)} N) = (^{(R)} kg m s^{-2}) \)	| Tangential Force			&
			| \( \vec{a}_T \)			| \( (m s^{-2}) \)				| Tangential Acceleration	&
			| m							| (kg)							| Mass (Inertia)			&
			||
		Uniform Circular Motion:  \[ \tau = I \alpha_a \]
			||
			| \( \tau \)				| \( ( J ^{(R^{-1})} ) \)	| Torque								&
			| I							| \( (kg m^2) \)			| Moment of Inertia (Angular Mass)		&
			| \( \vec{\alpha}_{a} \)	| \( (^{(R)} s^{-2}) \)		| Angular Acceleration					&
			||




Momentum
	\[ \vec{p}=m \vec{v} \]
		||
		| \( \vec{p} \)	| \( (kg m s^{-1}) \)	| Momentum			&
		| \( \vec{v} \)	| \( (m s^{-1}) \)		| Velocity			&
		| m				| (kg)					| Mass (Inertia)	&
		||
	\[ \vec{P} = \sum \vec{p} \]
		||
		| \( \vec{p} \)	| \( (kg m s^{-1}) \)	| Momentum				&
		| \( \vec{P} \)	| \( (kg m s^{-1}) \)	| Total Momentum		&
		||
Mass: \[ M = \sum m_i \]
		||
		| m			| (kg)					| Mass (Inertia)		&
		| M			| (kg)					| Total Mass (Inertia)	&
		| i			| unitless				| Dummy Variable		&
		||
Density: \[ \rho = \frac{m}{V} \]
		||
		| V				| \( (m^{3}) \) 		| Volume			&
		| m				| (kg)					| Mass (Inertia)	&
		| \( \rho \)	| \( (kg m^{-3}) \)		| Density			&
		||
Newton's Laws
	First Law: \[ \vec{F}_{net} = 0 \implies \vec{a} = 0 \]
		||
		| \( \vec{F} \)	| \( (N) = (kg m s^{-2}) \)	| Force				&
		| _net			| unitless					| Total				&
		| \( \vec{a} \)	| \( (m s^{-2}) \)			| Acceleration		&
		||
	Second Law: \[ \vec{F} = \vec{a} m \]
		||
		| \( \vec{a} \)	| \( (m s^{-2}) \)			| Acceleration		&
		| m				| (kg)						| Mass (Inertia)	&
		| \( \vec{F} \)	| \( (N) = (kg m s^{-2}) \)	| Force				&
		||
	Third Law: \[ \vec{F}_{A,B} = - \vec{F}_{B,A} \]
		||
		| \( \vec{F} \)	| \( (N) = (kg m s^{-2}) \)	| Force				&
		| _i,j			| unitless					| i wrt j			&
		||
