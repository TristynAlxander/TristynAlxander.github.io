#Vector Calculus

##Derivatives
	###Nabla
		Nabla: \[ \vec{\nabla} =  \hat{x}\frac{\partial}{\partial x} + \hat{y} \frac{\partial}{\partial y} + \hat{z} \frac{\partial}{\partial z} \]
		Gradient: \[ \text{grad}(f) = \vec{\nabla} f(x,y,z) = \frac{\partial f}{\partial x} \hat{x} + \frac{\partial f}{\partial y} \hat{y} + \frac{\partial f}{\partial z} \hat{z} \]
		Directional Derivative: \[ \nabla_{\hat{u}} f(x,y,...) = \vec{\nabla} f \cdot \hat{u} \]
			Direction of maximum rate of change: \[ \hat{u} = \frac{\vec{\nabla} f(x,y,z)}{| \vec{\nabla} f(x,y,z)|} \]
		Laplacian:
			\[ \vec{\nabla} \cdot (\nabla f)  = \nabla^2 f(x,y,z) = \frac{\partial^2 f}{\partial x^2}) + \frac{\partial^2 f}{\partial y^2}) +  \frac{\partial^2 f}{\partial z^2} \]
			\[ (\nabla  \cdot \nabla) \vec{F}) = \nabla^2 \vec{F} = \langle  \nabla^2 P , \nabla^2 Q, \nabla^2 R \rangle \]
		Divergence: \[ \text{div}(\vec{F})=\vec{\nabla} \cdot \vec{F}(x,y,z) = \frac{\partial f_1}{\partial x}+\frac{\partial f_2}{\partial y} + \frac{\partial f_3}{\partial z} \]
		Curl: \[ \text{curl} (\vec{F}) = \vec{\nabla} \times \vec{F}(x,y,z) = det \begin{vmatrix}\hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ f_x & f_y & f_z \end{vmatrix} \]
		Tensor Derivative:
		Dyadic Product:
		Conservative:
			\[ curl \vec{F} = 0 \]
			And \[\vec{F}\] is defined everywhere
		Normal Line:
			\[ \pm \nabla F(x,y,z) + C \]
			Unit Normal: \[ \frac{\pm \nabla F(x,y,z) + C}{|\pm \nabla F(x,y,z) + C|} \]
			Positive: Outward (default)
			Negative: Inward
		Tangent Line: \[ \nabla F(x,y,...) \cdot (\vec{r} - \vec{r_0}) = 0 \]
	###Product Rules for Del
		First Order:
			\[ \nabla(f g) = f \nabla g + g \nabla f \]
			\[ \nabla (\vec{u} \cdot \vec{v}) = (\vec{u} \cdot \vec{\nabla}) \vec{v} + (\vec{v} \cdot \vec{\nabla}) \vec{u} + \vec{u} \times (\vec{\nabla} \times \vec{v}) + \vec{v} \times (\vec{\nabla} \times \vec{u}) \]
			\[ \vec{\nabla} \times (f \vec{v}) = (\nabla f) \times \vec{v} + f (\vec{\nabla} \times \vec{v})  \]
			\[ \vec{\nabla} \cdot (f \vec{v}) = f (\vec{\nabla} \cdot \vec{v}) +  (\nabla f) \cdot \vec{v} \]
			\[ \vec{\nabla} \cdot (\vec{u} \times \vec{v}) = \vec{v} \cdot (\vec{\nabla} \times \vec{u}) - \vec{u} \cdot (\vec{\nabla} \times \vec{v}) \]
			\[ \vec{\nabla} \times (\vec{u} \times \vec{v}) = \vec{u} (\vec{\nabla} \cdot \vec{v}) - \vec{v} (\vec{\nabla} \cdot \vec{u}) + (\vec{v} \cdot \vec{\nabla}) \vec{u} - (\vec{u} \cdot \vec{\nabla}) \vec{v}  \]
		Second Order:
			\[ \text{div}(\text{curl} \vec{F}) = \vec{\nabla} \cdot (\vec{\nabla} \times \vec{F}) = 0 \]
			\[ \text{div}(\text{grad}(f)) \equiv \vec{\nabla} \cdot \nabla f = \nabla^2 f \]
			\[ \text{curl}(\text{grad}(f)) \equiv \vec{\nabla} \times \nabla f = \vec{0} \]
			\[ \text{curl}(\text{curl}(\vec{F})) \equiv \vec{\nabla} \times (\vec{\nabla} \times \vec{F}) = \nabla (\vec{\nabla} \cdot \vec{F}) - \nabla^2 \vec{F} \]
			\[ \nabla^2 (f g) = f \nabla^2 g + 2 \nabla f \cdot \nabla g + g \nabla^2 f \]

##Integrals
	###Line Integrals
		Parameterization of Line Integrals: \[ \int \vec{F} \cdot d \vec{r} = \int [X dx + Y dy + ...]  \]
			Where: 
				\[ \vec{F} = \langle X, Y, ... \rangle \]
				\[ \vec{r} = x \hat{i} + y \hat{j} + ... \]
				\[ d\vec{r} = \langle dx , dy , ... \rangle \]
			\[ \int_C \vec{F} \cdot d\vec{r} = \int \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) dt \]
			Lines: \[ \vec{r}(t) = (1-t) \langle x_{0}, y_{0}, z_{0} \rangle + t \langle x_{1}, y_{1}, z_{1} \rangle , 0 \leq t \leq 1 \]
		Fundamental Theorem of Calculus for Line Integrals, Gradient Theorem, Net-Change Theorem:
		\[ \int_{p \to q} \nabla f (\vec{r})\cdot d\vec{r} = f(q) - f(p) \]
			Where
				\[ F = \nabla f \]
				\[ \text{curl}(\vec{F}) = 0 \]
		Integration Over Lines
			Segmentation: \[ \int_C f(*)ds = \int_{C_1} f(*) ds + \int_{C_2} f(*) ds + \cdots  \]
				Where: \[ C = C_1 \cup C_2 \cup \cdots \]
			Orientation Reversal: \[ \int_{-C} f(*)ds = - \int_C f(*)ds \]
		Conservative Paths:
			\[ \int_{C:p \to p} \vec{F} \cdot d \vec{r} = 0 \]
			\[ \int_{C_{i}:p \to q} \vec{F} \cdot d\vec{r} = \int_{C_{j}:p \to q} \vec{F} \cdot d\vec{r} \]
	###Greens Theorm: \[ \int_{\partial D} \vec{F} \cdot d \vec{r}  = \oint_{\partial D} (X dx + Y dy) = \iint_{D} \frac{\partial Y}{\partial x} - \frac{\partial X}{\partial y} dA \]
		Positive/Negative Orientations: Right Hand Rule
		Fields must be defined in the enclosed area.
		Note: The Circle means it's closed & simple.
		\[ \iint_D \text{curl}(\vec{F}) \cdot \hat{k} dA = \oint_{\partial D} \vec{F} \codt d\vec{r} \]
	###Surface integrals: 
		Of a Function: \[ \iint_{\sigma} f(x,y,z) d\sigma = \iint_D f(\vec{r}(u,v)) |\vec{r}_{u} \times \vec{r}_{v}| dA \]
			\( \sigma \) is a curved surface parametrized as \vec{r}(u,v) 
			D is the Domain of r, on the u-v plane
		Of a Vector Field: \[ \iint_{\sigma} \vec{F}(x,y,z) \codt \hat{n} d\sigma = \iint_D \vec{F}(x,y,z) \codt (\vec{r}_u \times \vec{r}_v) d\sigma \]
			Oriented Surface: normal vector, \( \vec{n} \), varies continuously wrt position.
			Normal Vectors: \[ n = \frac{\vec{r}_u \times \vec{r}_v}{|\vec{r}_u \times \vec{r}_v|} \]
			D is the Domain of \sigma, on the u-v plane
			Flux: \[ \iint_{\sigma} \vec{F}(x,y,z) \codt \hat{n} d\sigma \]
		\[ \iint_{S} f(x,y,z) d \sigma = \iint_D f(x,y,g(x,y)) \sqrt{1+g_x^2 + g_y^2} dA \]
			S is the curved surface, D is the projection of that surface onto the x,y plane 
			Where S does not project twice onto D
			normal Vector: \[ \vec{n}= \pm \frac{g_x \hat{i} + g_y \hat{j} +\hat{k} }{\sqrt{1+g_x^2 + g_y^2}} \]
	###Curl Theorem (Stoke's): \[ \iint_{\sigma} \nabla \times \vec{F} \cdot \vec{n} d\sigma = \oint_{\partial\sigma} \vec{F} \cdot d\vec{r} \]
		Open Surface, \( \sigma \)
	###Divergence Theorem (Gauss's): \[ \iiint_V (\vec{\nabla}\cdot\vec{F}) dV = \oint \oint_{\partial V}(\vec{F}\cdot\vec{n}) d \partial V \]
		2D Divergence Theorem: \oint_C \vec{F} \cdot \vec{n} ds  =\iint \vac{\nabla} \cdot \vec{F} dA
		Normal Vectors: 

Normals
\pm \nabla G vector field of normals to surface \pm \nabla G = c
\hat{n} = \pm {\nabla f}{\nabla^2 f}



Divergence Theorem (Gauss's)
\iiint_V (\vec{\nabla}\cdot\vec{F}) dV = \oiint_{\partial V}(\vec{F}\cdot\vec{n}) d \partial V
Normal \vec{n} sign determined by k direction

In 2D: 
\iint_{S} \vec{V} \cdot \vec{n} d\sigma = \pm \iint (-X g_x - Y g_y + Z) dA
