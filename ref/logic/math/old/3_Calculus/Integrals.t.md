#Integrals

##Definitions
	Definition: \[ \int_a^b f(x) dx = \lim_{n \to \infty} \sum_{i = 1}^n (x_i) \Delta x \land \Delta x = \frac{a-b}{n} \land x_i = a+i \Delta x \]
	Fundamental Theorem Of Calculus: \[ f \in C^0 \land F(x) = \int_a^x f(t) dt. \Rightarrow F'(x) = f(x) \] \] \int_a^b f(x) dx = F(b) - F(a) \]
	Indefinite: \[ \int f(x) dx = F(x) + C \]
	One: \[ \int dx = \int 1 dx \]
	Labeling: \[ \int \text{Integrand} \, dx \]
	Differential Notation:
		Path Dependent: \[ \delta \]
		Path Independent: d
##Solving Integrals
	u-Substitution: \[ u = g(x) \land du = g'(x) dx \therefore \int_a^b f(g(x)) g'(x)dx = \int_{g(a)}^{g(b)} f(u) du \]
	Jacobian: 
		\[ \frac{\partial(F_1,\dotsc,F_m)}{\partial(x_1,\dotsc,x_n)} = \begin{vmatrix} \dfrac{\partial F_1}{\partial x_1} & \cdots & \dfrac{\partial F_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \dfrac{\partial F_m}{\partial x_1} & \cdots & \dfrac{\partial F_m}{\partial x_n} \end{vmatrix} \]
		Inverse: \[ \frac{\partial(F_1,\dotsc,F_m)}{\partial(x_1,\dotsc,x_n)} \, \frac{\partial(x_1,\dotsc,x_n)}{\partial(F_1,\dotsc,F_m)} = 1 \]
		Jacobian Substitution: \[ \int \int f(x,y, ...) dxdy... = \int \int f(x(u,v,...), y(u,v,...), ...) \left | \frac{\partial (x,y,...)}{\partial (u,v,...)} \right | du dv ... \]
	Trig Substitution: 
		\[ \sqrt{a^2 + b^2 x^2}, x = \frac{a}{b} \, \tan(\theta) \]
		\[ \sqrt{b^2 x^2 - a^2}, x = \frac{a}{b} \, \sec(\theta) \]
		\[ \sqrt{a^2 + b^2 x^2}, x = \frac{a}{b} \, \tan(\theta) \]
	Common Parameterization
		Ellipse: \[ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \]
			\[ x = a \cos(t) \]
			\[ y = b \sin(t) \]
			\[ 0 \leq t \leq 2\pi \]
		Lines:\[ \vec{r}(t) = (1-t) \langle x_{0}, y_{0}, z_{0} \rangle + t \langle x_{1}, y_{1}, z_{1} \rangle \]
			\[ x(t) = (1-t) x_{0} + t x_{1} \]
			\[ y(t) = (1-t) y_{0} + t y_{1} \]
			\[ z(t) = (1-t) z_{0} + t z_{1} \]
			\[ 0 \leq t \leq 1 \]
	By Parts: \[ \int u dv = uv - \int v du \]
	Over Nothing: \[ \int_a^a f(x) dx = 0 \]
	Direction Reversal: \[ \int_a^b f(x) dx = - \int_b^a f(x) dx \]
	Addition: \[ \int_a^b f(x) \pm g(x) dx = \int_a^b f(x) dx \pm \int_a^b g(x) dx \]
	Separation: \[ \int_a^c f(x) dx = \int_a^b f(x) dx + \int_b^c f(x) dx \]
	Order: \[ f(x) \lesseqgtr g(x) \land a \leq x \leq b \Rightarrow \int_a^b f(x) dx \lesseqgtr \int_a^b g(x) dx \]
	Special Functions
		Even Functions: \[ f \in C^0 \land f \in \{ \text{Even} \} \Rightarrow \int_{-a}^a f(x) dx = 2 \int_0^a f(x) dx \]
		Odd Functions: \[ f \in C^0 \land f \in \{ \text{Odd} \} \Rightarrow \int_{-a}^a f(x) dx = 0 \]
	Product Rule for Double Integrals: \[ \int \int f(x) \, g(y) dy dx = \int f(x) dx \int g(y) dy \]
	Invertible Double Integrals: \[ \int_a^b \int_c^d f(x,y) dy dx = \int_c^d \int_a^b f(x,y) dx dy \]
		Where: \[ a,b,c,d \neq a(x,y),b(x,y),c(x,y),d(x,y) \]
##Common Integrals
	Exponentiatee: \[ \int x^n dx = \frac{1}{n+1} x^{n+1} + c \]
	Exponentiater: \[ \int a^x dx = \frac{a^x}{\ln(a)} \]
	Fraction: \[ \int x^{-1} dx = \ln(|x|)+c \]
	Constants: \[ \int_a^b c f(x) dx = c \int_a^b f(x) dx \]
	Trigonometric Inverses: 
		Sine: \[ \int \cos(u) du = \sin (u)+c \]
		CoSine: \[ \int \sin(u) du = - \cos(u)+c \]
		Tangent: \[ \int \sec^2(u) du = \tan(u)+c \]
		CoSecant: \[ \int \cos(u) \cot(u) du = - \csc(u)+c \]
		Secant: \[ \int \sec(u) \tan(u) du = \sec(u)+c \]
		CoTangent: \[ \int \csc^2(u) du = - \cot(u)+c \]
		ArcSine: \[ \int {\sqrt[2]{1 - x^2}}^{-1} dx = \sin^{-1}(x) \]
		ArcCoSine: \[ \int -{\sqrt[2]{1 - x^2}}^{-1} dx = \cos^{-1}(x) \]
		ArcTangent: \[ \int (a^2 + x^2)^{-1} dx = \tan^{-1} \left( \frac{x}{a} \right) \]
		ArcCoSecant: \[ \int -(x \sqrt[2]{x^2 - 1})^{-1} dx = \csc^{-1}(x) \]
		ArcSecant: \[ \int (x \sqrt[2]{x^2 - 1})^-1 dx = \sec^{-1}(x) \]
		ArcCoTangent: \[ \int -(1 + x^2)^{-1} dx = \cot^{-1}(x) \]
	Integral *Tables*:
		\[ \int \sin^{2}(t) dt = \frac{x}{2} - \frac{sin(x)}{4} + c \]
##Integral Graphs
	Arcs:
		\[ L = \int_a^b ds \]
		\[ ds = \sqrt{1 + \left( \frac{dy}{dx} \right)^2}, a \leq x \leq b \]
		\[ ds = \sqrt{\left( \frac{dx}{dt} \right)^2 + \left( \frac{dy}{dt} \right)^2}, a \leq t \leq b \]
		\[ ds = \sqrt{r^2 + \left( \frac{dr}{d \theta} \right)^2}, a \leq \theta \leq b \]
	Over Parts: \[ C = C_1 \cup C_2 \cup \cdots \Rightarrow \int_C f(*)ds = \int_{C_1} f(*) ds + \int_{C_2} f(*) ds + \cdots \]
	Orientation Reversal: \[ \int_{-C} f(*)ds = - \int_C f(*)ds \]
	Area: 
		\[ A = \int_a^b f(x) dx \]
		\[ A = \int \int 1 dA \]
		Trapezoidal Rule (Approximation): \[ \int_{a}^{b} f(x) dx \approx (b-a) \left( \frac{f(a) + f(b)}{2} \right) \]
		Double Integral Parameterization
			Rectangular: \[ \iint_D f(x,y) dA = \int_a^b \int_{g_{2}(x)}^{g_{1}(x)}  f(x,y) dy dx = \int_c^d \int_{g_{2}(y)}^{g_{1}(y)}  f(x,y) dx dy \]
			Polar: \[ \iint_D f dA = \int_\alpha^\beta \int_{g_{2}(\theta)}^{g_{1}(\theta)} f(r \cos(\theta) , r \sin(\theta)) r dr d\theta \]
	Volume: 
		\[ V = \int \int f(x,y) dy dx \]
		\[ V = \int \int \int 1 dz dy dx \]
		\[ V = \int A(x) dx \]
		Cylinders: \[ A(x) = 2 \pi (r_1(x))(h(x)) \]
		Rings: \[ A(x) = \pi (r_1(x)^2 - r_2(x)^2) \]
		