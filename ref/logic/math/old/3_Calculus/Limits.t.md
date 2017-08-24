#Limits
	Types:
		Limit: \[ \lim_{x \to c} f(x) = L \iff \forall \varepsilon >0 \exists \delta > 0 \land (0 < |x - c | < \delta \ \implies \ |f(x) - L| < \varepsilon) \]
		Sides: \[\lim_{x \to a} \left( f(x) \right) = L \iff \lim_{x \to a^{-}} \left( f(x) \right) = L \land \lim_{x \to a^{+}} \left( f(x) \right) = L \]
		Right Hand: \[ \lim _{x \to a+} f(x) = L \iff \forall \varepsilon >0 \exists \delta > 0 \land (a \leq x < a + \delta \implies |f(x) - L| < \varepsilon ) \]
		Left Hand: \[ \lim _{x \to a-} f(x) = L \iff \forall \varepsilon > 0 \exists \delta > 0 \land (a-\delta < x \leq a \implies |f(x) - L| < \varepsilon ) \]
		Infinite Domain: \[ \lim _{x \to \infty} f(x) = L \iff \forall \varepsilon > 0 \exists \delta > 0 \land (R < x \implies |f(x) - L| < \varepsilon) \]
		Infinite CoDomain: \[ \lim _{x \to a} f(x) = \infty \iff \forall \varepsilon > 0 \exists \delta > 0 \land (a-\delta < x \leq a \implies B < f(x)) \]
	Properties:
		Addition: \[ \lim_{x \to a} \left( f(x) \pm g(x) \right) =  \lim_{x \to a} \left( f(x) \right) \pm \lim_{x \to a} \left( g(x) \right) \]
		Constant Factor: \[ \lim_{x \to a} \left( c f(x) \right) = c \lim_{x \to a} \left( f(x) \right) \]
		Exponentiation: \[ \lim_{x \to a} \left[ \left( f(x) \right)^n \right] =  \left[ \lim_{x \to a} \left( f(x) \right) \right]^n \]
		Fraction: 
			\[ \lim_{x \to a} \left( g(x) \right) \not= 0 \implies \lim_{x \to a} \left( \frac{f(x)}{g(x)} \right) =  \frac { \lim_{x \to a} \left( f(x) \right)}{ \lim_{x \to a} \left( g(x) \right)} \]
			\[ \lim_{x,y \to a,b} \left( q(x,y) \right) \not= 0 \implies \lim_{x,y \to a,b} \left( \frac{p(x,y)}{q(x,y)} \right) =  \frac { \lim_{x,y \to a,b} \left( p(x,y) \right)}{ \lim_{x,y \to a,b} \left( q(x,y) \right)} \]
		Multiplication: \[ \lim_{x \to a} \left( f(x) \, g(x) \right) =  \lim_{x \to a} \left( f(x) \right) \, \lim_{x \to a} \left( g(x) \right) \]
		Order: \[ {\lim_{x \to a} \left( f(x) \right)} = F \land {\lim _{x \to a} \left( g(x) \right)} = G \land {\lim_{x \to a} \left( f(x) \right)} \leq {\lim _{x \to a} \left( g(x) \right)} \implies F \leq G \]
	Squeeze: \[ e(x) \leq f(x) \leq g(x) \land e(a) = b \land g(a) = b \implies f(a) = b \]
	e: \[ e = \lim_{n\to\infty} \left( 1 + \frac{1}{n} \right)^n \approx 2.718281828... \]
#L'Hospitals Rule
	\[ \lim_{x \to a} \left( \frac{f(x)}{g(x)} \right) = \frac{0}{0} = \lim_{x \to a} \left( \frac{\frac{d}{dx}f(x)}{\frac{d}{dx}g(x)} \right) \]
	\[ \lim_{x \to a} \left( \frac{f(x)}{g(x)} \right) = \frac{\infty}{\infty} = \lim_{x \to a} \left( \frac{\frac{d}{dx}f(x)}{\frac{d}{dx}g(x)} \right) \]
	Indeterminate Forms: 
		\[ \frac{\infty}{\infty} \]
		\[ \frac{0}{0} \]
		\[ \infty 0 = \frac{0}{\frac{1}{0}} = \frac{0}{0} \]
		\[ 0^0 = e^{\ln(0^0)} = e^{0 \ln(0)} = e^{-\infty 0} \]
		\[ 1^{\infty} = e^{\ln(1^{\infty})} = e^{\infty \ln(1)}= e^{\infty 0} \]
		\[ \infty^0 = e^{\ln(\infty^0)} = e^{0 \ln(\infty)} = e^{0 \infty} \]
		\[ \infty - \infty = \ln(e^{\infty - \infty}) = \ln(\frac{e^{\infty}}{e^{\infty}}) = \ln(\frac{\infty}{\infty}) \]
		\[ \log_1{(1)} = \frac{\log_10(1)}{\log_10(1)} = \frac{0}{0} \]
#Continuity
	Continuity: 
		Point: 
			\[ f(c) \in C^0 \Leftrightarrow \lim_{x \to c} f(x)= f(c) \]
			\[ f(a,b) \in C^0 \Leftrightarrow \lim_{x,y \to a,b} f(x,y)= f(a,b) \]
		Set: \[ \{f(x) | a \leq x \leq b \} \in C^0 \Leftrightarrow \forall \{ c | a \leq c \leq b \} \exists x \land \lim_{x \to c} f(x)= f(c) \]
	Differentiable: 
		Point: \[ f(c) \in C^1 \Leftrightarrow f'(c) \in C^0 \]
		Set: \[ \{f(x) | a \leq x \leq b \} \in C^1 \Leftrightarrow \{f'(x) | a \leq x \leq b \} \in C^0 \]
	Smooth: 
		Point: \[ f(c) \in C^{\infty} \Leftrightarrow f^({\infty})(c) \in C^0 \]
		Set: \[ \{f(x) | a \leq x \leq b \} \in C^{\infty} \Leftrightarrow \{f^({\infty})(x) | a \leq x \leq b \} \in C^0 \]
	Smooth Differentiable Continuous: \[ f(x) \in C^{\infty} \Rightarrow ... \Rightarrow f(x) \in C^{k} \Rightarrow ... \Rightarrow f(x) \in C^1 \Rightarrow f(x) \in C^0 \]
	Composition: \[ f(x) \in C^0 \land g(x) \in C^0 \Rightarrow f(g(x)) \land g(f(x)) \in C^0 \]
	Continuous Limits: \[ f(x) \in C^0 \Rightarrow \lim_{x \to c}f(g(x)) = f \left( \lim_{x \to c}g(x) \right) \]
	Singular Points: \[ f(x) \in C^0 \land f(x) \notin C^1 \]