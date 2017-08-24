#Derivatives

##Definitions
	Definition: \[ \frac{d}{dx} f(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{(x+h)-x} \]
	Notation: \[ \frac{d}{dx} f = f' = f^{(1)} = D_{x}f = D f = \dot{f} \]
	Differential: \[ dy = f'(x) \, dx \]
	Higher Order Notation: \[ f^{(n)} = \frac{d^n}{dx^n} = D _x^n \]
	Nested: 
		\[ \frac{d}{dx} y(t) = \frac{\frac{d}{dt} y}{\frac{d}{dt}x} \] 
		\[ \frac{d}{dx} \left( \frac{d}{dx} y \right) = \frac{\frac{d}{dt} \frac{d}{dx}y }{\frac{d}{dt}x} \]
	Partials: 
		Definition: \[ \frac{\partial}{\partial x} f(x,y,z) = \lim_{h \to 0} \frac{f(x+h,y,z) - f(x,y,z)}{(x+h)-x} \]
		Notation: \[ \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2}{\partial x \partial y} f = f_yx = f = D_{x} f \]
		Partial To Differential: \[ dF = \frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y}dy + ... \]
		Partial Composition: 
			\[ \frac{\partial F}{\partial t} = \sum \left( \frac{F}{\ddots} \, \frac{\ddots}{\ddots} \, \frac{\ddots}{t} \right) \] 
			\[ F(x) \Rightarrow \frac{\partial F}{\partial x} = \frac{d F}{d x} \]
##Solving Derivatives
	Addition: \[ \frac{d}{dx} f \pm g = f' \pm g' \]
	Constant Factor: \[ \frac{d}{dx} c \, f = c \, f' \]
	Multiplication:
		\[ \frac{d}{dx} f \, g = f' \, g + f \, g' \]
		\[ \frac{d}{dx} f \, g \, h = f' \, g \, h + f \, g' \, h + f \, g \, h' \] 
		...
	Fraction: 
		\[ \frac{d}{dx} \frac{1}{f} = \frac{-f'}{f^2} \]
		\[ \frac{d}{dx} \frac{f}{g} = \frac{f' \, g - g' \, f }{g^2} \]
	Natural: \[ \frac{d}{dx} \ln(f) = \frac{f'}{f} \]
	Chain Rule: 
		\[ \frac{d}{dx} f(g(x)) = f'(g(x)) \, g'(x) \]
		\[ \frac{d}{dx} f(g(h(x))) = f'(g(h(x))) \, g'(h(x)) \, h'(x) \] 
		...
##Common Derivatives
	Constant:					\[ \frac{d}{dx} c = 0 \]
	Exponentiatee:				\[ \frac{d}{dx} x^n = n \, x^{n-1} \]
	Higher Order Exponentiatee:	\[ f = x^n \land 0 \leq k \leq n \land f^{(k)} = \frac{n!}{(n-k)!}x^{n-k} \]
	Exponentiater:				\[ \frac{d}{dx} n^x = n^x \, \ln{n} \]
	Logarithm:					\[ \frac{d}{dx} \log_{c}(x) = \left( x \, \ln(c) \right)^{-1} \]
	Absolute Value:				\[ \frac{d}{dx} |x| = \frac{x}{|x|} \]
	Trigonometric: 
		Sine:			\[ \frac{d}{dx} \sin(\theta) = \cos(\theta) \]
		CoSine:			\[ \frac{d}{dx} \cos(\theta) = - \sin(\theta) \]
		Tangent:		\[ \frac{d}{dx} \tan(\theta) = \sec^{2}(\theta) \]
		Secant:			\[ \frac{d}{dx} \sec(\theta) = \sec(\theta) \, \tan(\theta) \]
		CoSecant:		\[ \frac{d}{dx} \csc(\theta) = - \csc(\theta) \, \cot(\theta) \]
		CoTangent:		\[ \frac{d}{dx} \cot(\theta) = \csc^{2}(\theta) \]
		ArcSine:		\[ \frac{d}{dx} \sin^{-1}(x) = {\sqrt[2]{1 - x^2}}^{-1} \]
		ArcCoSine:		\[ \frac{d}{dx} \cos^{-1}(x) = -{\sqrt[2]{1 - x^2}}^{-1} \]
		ArcTangent:		\[ \frac{d}{dx} \tan^{-1}(x) = (1 + x^2)^{-1} \]
		ArcCoSecant:	\[ \frac{d}{dx} \csc^{-1}(x) = -(x \sqrt[2]{x^2 - 1})^{-1} \]
		ArcSecant:		\[ \frac{d}{dx} \sec^{-1}(x) = (x \sqrt[2]{x^2 - 1})^{-1} \]
		ArcCoTangent:	\[ \frac{d}{dx} \cot^{-1}(x) = -(1 + x^2)^{-1} \]
##Derivative Graphs
	Inflection Point: \[ f''(c) = 0 \land \lim_{x \to c^{+}}f''(x) \lessgtr 0 \land \lim_{x \to c^{-}}f''(x) \gtrless 0 \]
	Stationary Inflection Point: \[ f'(c) = 0 \land f''(c) = 0 \]
	Undulation Point: \[ f''(c) = 0 \land \lim_{x \to c^{+}}f''(x) \lessgtr 0 \land \lim_{x \to c^{-}}f''(x) \lessgtr 0 \]
	Concave Down: \[ f''(c) < 0 \]
	Concave Up: \[ f''(c) > 0 \]
	Constant: \[ f'(c) = 0 \]
	Deceasing: \[ f'(c) < 0 \]
	Increasing: \[ f'(c) > 0 \]
	Local Max Min: \[ f'(c) \gtrless f(x) \forall x \in [a,b] \]
	Discriminant: \[ D = \left | \begin{matrix}f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{matrix} \right | \]
		Relative Max: \[ D > 0 \land f_{xx} < 0 \]
		Relative Min: \[ D > 0 \land f_{xx} > 0 \]
		Saddle Point: \[ D < 0 \]
	Extreme Value Theorem: \[ \forall f \in C^0 \exists m,M \in [a,b] \land f(m) \leq f(x) \leq f(M) \]
	Fermat's Theorem: \[ \text{Min/Max} \Rightarrow f'(c) = 0 \]
	First Derivative Test: 
		\[ \lim_{x \to c^{-}} f'(x)>0 \land \lim_{x \to c^{+}} f'(x)<0 \Rightarrow \text{Max} \]
		\[ \lim_{x \to c^{-}} f'(x)<0 \land \lim_{x \to c^{+}} f'(x)>0 \Rightarrow \text{Min} \]
		\[ \lim_{x \to c^{-}} f'(x) \lessgtr 0 \land \lim_{x \to c^{+}} f'(x) \lessgtr 0 \Rightarrow \text{Neither} \]
	Generalized Mean Value Theorem: \[ f(c_1) \land g(c_1) \in C^0 \forall c_1 \in [a,b] \land  f(c_2) \land g(c_2) \in C^1 \forall c_2 \in (a,b) \land g(a) \not= g(b) \Rightarrow \exists f'(c) = \frac{f(a) - f(b)}{g(a)-g(b)} \]
	Interior Critical Points: \[ \nabla F(x,y,...) = \vec{0} \lor \nabla F(x,y,...) \nexists \]
	Intermediate Value: \[ f(c_1) \in C^0 \forall c_1 \in [a,b] \land f(a) \leq N \leq f(b) \Rightarrow \exists f(c) = N \]
	Mean Value Theorem: \[ f(c_1) \in C^0 \forall c_1 \in [a,b] \land f(c_2) \in C^1 \forall c_2 \in (a,b) \Rightarrow \exists f'(c) = \frac{f(a) - f(b)}{a-b} \]
	Second DerivativeTest: 
		\[ f'(c) = 0 \land f''({c})<0 \Rightarrow \text{Max} \]
		\[ f'(c) = 0 \land f''({c})>0 \Rightarrow \text{Min} \]
		\[ f'(c) = 0 \land f''({c}) = 0 \Rightarrow \text{Neither} \]
	Normal Slope: \[ m_N = -\frac{1}{f'(x)} \]
	Tangent Slope: \[ m_T = f'(x) \]
	Tangent Line: \[ F(x,y, ...) \land r = \langle x,y,...\rangle \land r_0 = \langle x_0 ,y_0 ,...\rangle \Rightarrow \nabla F(x,y,...) \cdot (\vec{r} - \vec{r_0}) = 0 \]
	Tangent Planes: 
	Contour Curves: \[ F(x,y,z) \land z=:z_i \Rightarrow F(x,y, z_i) \]
	Absolute Max Min: \[ f'(c) \gtrless f(x) \forall x \in D_f \]
	Critical Point: \[ f'(c) = 0 \lor \nexists f'(c) \]