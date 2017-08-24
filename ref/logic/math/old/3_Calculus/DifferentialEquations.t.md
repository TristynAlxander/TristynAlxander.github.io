First Order Differential Equation: \[ F(x,y,y') = 0 \]
	Linear First Order Differential Equation: \[ \frac{dy(x)}{dx} + P(x) y(x) = Q(x) \]
		Derivation:
			\[ \frac{dy(x)}{dx} + P(x) y(x) = Q(x) \]
			\[ e^{\int P(x) dx}\frac{dy(x)}{dx} + e^{\int P(x) dx} P(x) y(x) = e^{\int P(x) dx} Q(x) \]
			\[ \frc{d}{dx}[ e^{\int P(x) dx}  y(x)]=e^{\int P(x) dx} Q(x) \]
			\[ e^{\int P(x) dx}  y(x) = \int e^{\int P(x) dx} Q(x) dx + C \]
		\[ y(x) = e^{-\int P(x) dx} [\int e^{\int P(x) dx} Q(x) dx + C] \]
		Multiplying factor: \[ e^{\int P(x) dx} \]
	Separable Differential Equation:
		\[ \frac{dy}{dx} = f(x) f(y) \]
		\[ A(y) dy=B(x) dx \]
		\[ \int A(y) dy = \int B(t) dt \]
		Note: they can't be functions of the other because not partials
	
Bernoulli's Equation
	y' + p y = q y^n
	Let: z=y^{1-n} 
	Let: z' = (1-n) y^{-n} y' 
	Multiply by:(1-n) y^{-n}
		[(1-n) y^{-n}]*  [(y' + p y) = (q y^n)]
	Put in terms of z
		z' + (1-n) p z = (1-n) q
	Solve for z
	Solve for y (Linear First Order Differential Equation)
Exact Differential Equations
	0 = F_x + F_y dy/dx = d/dx F(x,y(x)) = 0 \implies F(x,y) = c
	Note: F_{x,y}=F_{y,x}
Homogenous Equation:
	y' = f(y/x) = f(v)
	Derivative wrt x
	v + xv' = f(v)
	Separable

Second Order Differential Equations
	F(x,y,y',y'')=0

Linear: f(x)y+g(x)y'+h(x)y''=j(x)

Linear with constants: a y+ b y'+c y''= f(x)

Linear with constants
	At zero: a y''+ b y'+c y= 0
		Proof uses y=e^{r x}, y'=r e^{r x}, y''=r^2 e^{r x}
		Characteristic equation: a r^2 + b r + c = 0
		Quadratic equation to find r's
		Combined constants: y_c = \sum C_i e^{r_i x}
	At F(x): a y'' + b y' + c y = F(x)
		Solution: y = y_c + y_p
	Solve left side's roots, identify C(A,B) & n
	Getting y_p:
	If   F(t) = P_n (x) e^{Ax} \sin(Bx)
		Solve G(x) = P_{n}(x) e^{(A+iB)x} = e^{Cx} P_{n}(x)
		Take Im(y_p)
	If   F(t) = P_n (x) e^{Ax} \cos(Bx)
		Solve as if G(x) = P_{n}(x) e^{(A+iB)x} = e^{Cx} P_{n}(x)
		Take Re(y_p)
	
	If F(x) = e^{Cx} P_{n}(x),
		If r_1 \neq C \neq r_2 ,  then 
			y_p(x) = e^{Cx} Q_{n} (x)
		If C=r_1 \neq r_2 then  
			y_p(x) = x e^{Cx} Q_{n} (x)
		If C=r_1 = r_2 then  
			y_p(x) = x^2 e^{Cx} Q_{n} (x)
	Sub in y to left hand side (or just y_p  because the y_c will pop out to zero)
	Solve for y_p 

