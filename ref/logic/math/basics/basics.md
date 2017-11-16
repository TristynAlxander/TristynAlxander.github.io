#Basics (Arithmetic)

Functions
	Notation: Function(Argument)
	Dependence: 
		y=f(x) Independent: y; Dependent: x 
		z=f(x,y) Independent: z; Dependent: x,y
		...
	Domain:
		\[ \{ x|f(x) \in \mathbb{R} \} \]
		\[ \{ (x,y) | f(x,y) \in \mathbb{R} \} \]
	Interval Notation: 
		\[ (a,b) = \{ x \in \mathbb{R} | a < x < b \} \]
		\[ [a,b) = \{ x \in \mathbb{R} | a \le x < b \} \]
		\[ (a,b] = \{ x \in \mathbb{R} | a < x \le b \} \]
		\[ [a,b] = \{ x \in \mathbb{R} | a \le x \le b \} \]
	Codomain: 
		\[ \{f(x)|x \in \mathbb{R} \} \]
		\[ \{f(x,y)|(x,y) \in \mathbb{R} \} \] 
		 ...
	Piecewise:
	Floor: \[ \lfloor x \rfloor \]
	Ceil: \[ \lceil x \rceil \]
	Even: f(x) = f(-x)
	Odd: -f(x) = f(-x)
	Periodic: \[ f(x) = f(x+\mathbb{Z}\lambda) \]
	Inverse: \[ f^{-1}(f(x)) = x \]
	One To One: \[ \forall a,b \in A | f(a)=f(b) \implies a=b \]
	Parametric Form: F(x,y,...) to F(x(t),y(t),...), x(t), y(t)
	Explicit Form: \[ y = f(x,...) \]
	Implicit Form: \[ 0 = g(y,x,...) \]
	Symmetric Equations: \[ \frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c} \]
Numbers
	Complex: \[ \mathbb{C} = \{ x + y i | x, y \in \mathbb{R} \} \]
	Imaginary: \[ \{x i| x \in \mathbb{R}\} \]
	Real: 
	Transcendental: 
	Algebraic: 
	Rational (Quotient): \[ \mathbb{Q} = \{ \frac{x}{y} | x,y \in \mathbb{Z} \} \]
	Irrational: 
	Surds: 
	Integers (Zahlen) Set: \[ \mathbb{Z} = -\mathbb{N} \cup \{ 0 \} \cup \mathbb{N} \]
	Natural (Counting): \[ \mathbb{N} = \{ n |_{n = 1}^{\infty}, n \neq \infty \} \]
	Whole: \[ \{ |\varnothing| \cup \mathbb{N} \} \]
	Negative: \[ \{ x : x < 0 \} \]
	Positive: \[ \{ x : x > 0 \} \]
	Composite:  \[ \{ c = \prod p_i^n | p \in \mathbb{P} \} \]
	Prime: \[ \mathbb{P} = \{ n > 1 \in\mathbb{N} :m|n \Rightarrow  m=1 \lor m=n \} \]
	Perfect: 
	Imperfect:
	Even: \[ \{ z/2 \in \mathbb{Z} | z \in \mathbb{Z} \} \]
	Odd: \[ \{ z/2 \notin \mathbb{Z} | z \in \mathbb{Z} \} \]
Relations
	Reflexive: \[ x \equiv x \]
	Substitution: \[ x \equiv y \Rightarrow f(x) \equiv f(y) \]
	Symmetric: \[ (x \gtreqless y) = (y \lesseqgtr x) \]
		\[ (x > y) = (y < x) \]
		\[ (x = y) = (y = x) \]
		\[ (x < y) = (y < x) \]
	Transitive: \[ (x \lesseqgtr y) \land (y \lesseqgtr z) \Rightarrow (x \lesseqgtr z ) \]
		\[ (x < y) \land (y < z) \Rightarrow (x < z) \)
		\[ (x = y) \land (y = z) \Rightarrow (x = z) \)
		\[ (x > y) \land (y > z) \Rightarrow (x > z) \)
	Equivalent: \[ A \equiv B \]
	Not Equivalent: \[ A \not\equiv B \]
	Equal: a = b 
	Not Equal: \[ a \neq b \]
	Membership: \[ a \in b \]
	Less than: \[ a < b  \]
	Greater than: \[ a > b  \]
	Less than or Equal to: \[ a \leq b  \]
	Greater than or Equal to: \[ a \geq b  \]
	Not Less than: \[ a \nless b  \]
	Not Greater than: \[ a \ngtr b  \]
	Not Less than or Equal to: \[ a \nleq b  \]
	Not Greater than or Equal to: \[ a \ngeq b  \]
Polynomials
	Common Polynomials
		\[ (a+b)^2 = a^2 + 2 a b+ b^2 \]
		\[ (a - b)^2 =a^2 - 2 a b+ b^2 \] 
		\[ a^2 - b^2 = (a - b)(a+b) \]
		\[ a^3 + b^3 = (a + b)(a^2 - a b + b^2) \]
		\[ a^3 - b^3 = (a - b)(a^2 + a b + b^2) \]
		\[ a^n - b^n = (a - b) (a^{n-1} b^0 + a^{n-2} b^1 + a^{n-3} b^2 + a^{n-4} b^3 +...+ a^2 b^{n-3} + a^1 b^{n-2} + a^0 b^{n-1}) \]
	Quadratic Equation: \[ a x^2 + b x + c = 0 \Rightarrow x=\frac{-b\pm\sqrt{b^2-4ac }}{2a} \]
	Homogeneous Polynomial: Same total degree (x & y) on every term.