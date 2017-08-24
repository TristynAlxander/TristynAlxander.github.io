#Vectors

Basic Math on Vectors
	Unit:
		\[ \hat{v} = \frac{ \vec{v} }{ | \vec{v} | } \]
		Magnitude: \[| \hat {v} | = 1 \]
	Addition: \[ \vec{v} \pm \vec{u} = \langle v_1 \pm u_1, v_2 \pm u_2, ... \rangle \]
	Scalar: \[ c \vec{v} = \langle c v_1 , c v_2 , ... \rangle \]
	Magnitude: \[ |\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2 + ...} \]
	Limits: \[ \lim_{t \to a} r(t) = \langle \lim_{t \to a} f(t), \lim_{t \to a} g(t),... \rangle \]
	Integral: \[ \int r(t) dt = \langle \int f(t) dt, \int g(t) dt,... \rangle \]
	Derivatives:
		\[ r'(t) = \langle f'(t),g'(t),... \rangle  \]
		\[ \frac{d}{dt}(a(t) \vec{A})=  \frac{da}{dt} \vec{A} + a(t) \frac{d\vec{A}}{dt} \]
		\[ \frac{d}{dt}(\vec{B} \cdot \vec{A})=  \frac{d\vec{B}}{dt} \cdot \vec{A} + \vec{B} \cdot \frac{d\vec{A}}{dt} \]
		\[ \frac{d}{dt}(\vec{B} \times \vec{A})=  \frac{d\vec{B}}{dt} \times \vec{A} + \vec{B} \times \frac{d\vec{A}}{dt} \]
	Vector Fields:
		\[ \vec{F}(x,y,z) = \langle f_{1}(x,y,z) , f_{2}(x,y,z) , f_{3}(x,y,z) \rangle \]
		\[ \vec{F}(x,y) = \langle f_{1}(x,y) , f_{2}(x,y) \rangle \]
Geometry of Vectors
	Components: \[ \vec{v} = v \hat{v} \]
	Notations: \[ \vec{v} = v_1 \hat{i} + v_2 \hat{j} + ... =  \langle v_1 , v_2 , ... \rangle \]
	Point Vector Notation: \[ P_{1}: (x_{1},y_{1}, ...); P_{2}: (x_{2}, y_{2}, ...) \Rightarrow \overrightarrow{P_1 P_2} = \left \langle x_2 - x_1 , y_2 -y_1, ... \right \rangle \]
	Ray: \[ \vec{v_r} = \infty \hat{v_r} \]
	Origin: \[ P_0 = (0, 0,0,...) \]
	Equatorial Zero (Zero Vector): \[ \vec{0} =  \langle 0, 0, 0, ... \rangle \]
	Line: \[ \vec{r}(t) = \vec{a} + \vec{b}t \]
		\[ \vec{b} \] is a directional vector.
		\[ \vec{a} \] is the displacement vector.
	Plane: 
	Parallel: 
		\[ \vec{v} \parallel \vec{u} \Leftrightarrow  \vec{v}\times \vec{u} = 0 \]
		\[ \vec{v} \parallel \vec{u} \Rightarrow \vec{v} = c \vec{u} \]
	Perpendicular: \[ \vec{v} \perp \vec{u} \Leftrightarrow  \vec{v}\cdot \vec{u} = 0 \]
	Projection: \[ \text{proj} \, \vec{a}_{\vec{b}} =\text{proj}_{\vec{b}} \vec{a} = \frac{\text{proj} \, \vec{a}}{\vec{b}} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2} \vec{b} \]
Vector-Scalar Products
	Dot, Scalar, or Inner Product: \[ \vec{v} \cdot \vec{u} = \sum_i^n v_i u_i \]
	Commutative \& Associative: \[ \vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u} \]
	Homogeneous Scalar Multiplication: \[ r (\vec {A} \cdot \vec {B} ) =  (r \vec {A} )\cdot \vec {B} =\vec {A} \cdot (r \vec {B} ) \]
	Distribution: \[ (\vec{a} + \vec{b}) \cdot (\vec{c}) = \vec{a} \cdot \vec{c} + \vec{b} \cdot \vec{c} \]
	Square: \[ \vec{v} \cdot \vec{v} = |\vec{v}|^2 \]
	Zero: \[ \vec{v} \times \vec{0} = \vec{0} \]
	Angular:  
		\[ \vec{v} \cdot \vec{u} = |\vec{v}| |\vec{u}| \cos( \theta ) \]
		\[ 0 \leq \theta \leq \pi \]
	Scalar Product Interpretations: 
		Amount of \[ \vec{A} \] in direction \[ \hat{B} \].
		Work (W) is the dot product of Force (F) and Distance (d).
	Scalar Triple Product:
		\[ \vec{a} \cdot (\vec{b} \times \vec{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} \]
		Order: \[ \vec{A} \cdot (\vec{B} \times C) = \vec{B} \cdot (\vec{C} \times \vec{A}) = \vec{C} \cdot (\vec{A} \times \vec{B}) \]
	Scalar Triple Product Interpretations:
		Parallelepiped Volume: \[ V = \vec{a} \cdot (\vec{b} \times \vec{c}) \]
		Torque (\[\tau\]) about a Line (L) due to a Force (F) at a Radiaus (r): \[ \tau = \hat{L} \cdot (\vec{r} \times \vec{F}) \]
		Jacobian Matrixes
Vector-Cross Products
	Cross or Vector Product: \[ \vec{v} \times \vec{u} = \begin{vmatrix} i & j & k \\ v_1 & v_2 & v_3 \\ u_1 & u_2 & u_3 \end{vmatrix} \]
	Anti-Commutative: \[ \vec{v} \times \vec{u} = - ( \vec{u} \times \vec{v}) \]
	Non-Associative: \[ \vec{a} \times (\vec{b} \times \vec{c}) \neq (\vec{a} \times \vec{b}) \times \vec{c} \]
	Homogeneous Scalar Multiplication: \[ (r \vec{a} )\times \vec{b} =\vec{a} \times (r \vec{b} )=r (\vec{a} \times \vec{b} ) \]
	Distribution: \[ \vec{a} \times ( \vec{b} + \vec{c} ) = ( \vec{a} \times \vec{b} ) + ( \vec{a} \times \vec{c} ) \]
	Zero: \[ \vec{v} \times \vec{0} = \vec{0} \]
	Square: \[ \vec{v} \times \vec{v} = \vec{0} \]
	Angular: 
		\[ \vec{v} \times \vec{u}  = |\vec{v}| |\vec{u}| \sin(\theta) \hat{n}  \]
		\[ 0 \leq \theta \leq \pi \]
	Cross Product Interpretations:
		Parallelogram Area: \[ A = |\vec{v} \times \vec{u}| \].
		Torque: \[ \vec{\tau} = \vec{r} \times \vec{F} \]
		Angular Momentum: \[ \vec{L} = \vec{r} \times \vec{p} \]
		Velocity in Uniform Circular Motion: \[ \vec{v} = \vec{\omega} \times \vec{r} \]
	Vector Triple Product:
		Lagrange's formula: \[ \vec{a} \times (\vec{b} \times \vec{c}) = \vec{b} (\vec{a} \cdot \vec{c}) - \vec{c} (\vec{a} \cdot \vec{b}) \]
	Vector Triple Product Interpretations:
		Angular Momentum: \[ \vec{L} = m \vec{r} \times (\vec{\omega} \times \vec{r}) \]