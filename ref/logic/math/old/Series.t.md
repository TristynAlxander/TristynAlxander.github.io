
Taylor Series: \[ T(f,a) = \sum_{n = 0}^{\infty} \frac {f^{(n)}(a)}{n!} \, (x-a)^{n} \]
	Where:
		\[ f \in C^{\infty} \]
		\[ x \in I \]
			T(f) converges on \[ x \in I \]
		basis {1,x,...x^n} of C^{\infty}

Fourier Series (Two-Pi Periodic): \[ F(f) = \frac{a_0}{2} + \sum_{n=1}^{n=\infty} a_n \cos(nx) + b_n \sin(nx) \]
	a_0 = \frac{1}{\pi} \langle f,1 \rangle_{-\pi,\pi} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) dx
		n=0
	a_n = \frac{1}{\pi} \langle f,\cos(nx) \rangle_{-\pi,\pi} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) dx
		n = 1,2,3,4,...
	b_n = \frac{1}{\pi} \langle f,\sin(nx) \rangle_{-\pi,\pi} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) dx
		n = 1,2,3,4,5,...
	Basis: {1, \cos(\theta), \sin(\theta), \cos(2\theta), \sin(3\theta), ..., \cos(n\theta), \sin(n\theta)}
		Orthogonal (integral of the products of the functions is zero)
.

Two-Ell Periodic Fourier Series
f(x) = \frac{a_0}{2} + \sum_{n=1}^{n=\infty} a_n \cos(\frac{\pi n x}{\ell}) + b_n \sin(\frac{\pi n x}{\ell})
	n = 0,1,2,3,4,…
		a_n = \frac{1}{\ell} \int_{-\ell}^{\ell} f(x) \cos(\frac{n \pi x}{\ell}) dx
	n = 1,2,3,4,5,…
		b_n = \frac{1}{\ell} \int_{-\ell}^{\ell} f(x) \sin(\frac{n \pi x}{\ell}) dx


Inner Product \langle f,g \rangle_{-\pi,\pi} = \int_{-\pi}^{\pi} f(x) g(x) dx
\langle f,f \rangle = ||f||^2
	
.
Proof of Orthogonality:
	\[ g(x) = \int_{-\pi}^{\pi} \sin(mx) \sin(nx) dx \]
	\[ h(x) = \int_{-\pi}^{\pi} \cos(mx) \cos(nx) dx \]
	\[ j(x) = \int_{-\pi}^{\pi} \sin(mx) \cos(nx) dx \]
	||
	| m=n=0				| \( m=n \neq 0\)	| \( m \neq n \)	&
	| g(x) = 0			| \( g(x) = \pi \)	| g(x) = 0			&
	| \( h(x) = 2\pi \)	| \( h(x) = \pi\)	| h(x) = 0			&
	| j(x) = 0			| j(x) = 0			| j(x) = 0			&
	||





DeMoivre Theorem: (\cos(\theta) + i \sin(\theta))^n = \cos(n \theta) + i sin(n \theta)
