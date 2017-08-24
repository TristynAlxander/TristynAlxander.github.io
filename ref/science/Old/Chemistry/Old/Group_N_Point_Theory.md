#Point Groups in Chemistry

	Operator Basics
		Applied Right to Left
		Multiplication Table of  \( X_{1} X_{2} = X_{3}\)
			|			| A	| B	| C	| ...	| \(X_{2}\)	|
			| A			|	|	|	|		|			|
			| B			|	|	|	|		|			|
			| C			|	|	|	|		|			|
			| ...		|	|	|	|		|			|
			| \(X_{1}\)	|	|	|	|		| \(X_{3}\)	|
		Inverse Operators: \( X^{-1} X = I \)
		Identity Operator
	Groups: Collection of Operators
		Subgroup: Groups in Groups
		Requirements 
			Must have an Identity Operator
			Product of Two Operators is in the group (is that "closed"?)
			Associative multiplication, but not necessarily commutative multiplication
			Every Operation has an inverse. 
		Oder
			Number of Operators
			Order of a subgroup: Integer Divisor of Parent Group.
		Similarity Transformations
			Z^{-1} X Z = Y
			X and Y are Conjugate 
		Class: Group of conjugate operators
			Any Similarity Transformation applied to operator results in another in the group
		Point Groups: At least one invariant point across all operations
		Space Group
	
	Symmetry Operators: Move Elements into equivalent orientations.
		|: Symbol			   :| Description							| Symmetry Element						|: Inverse Relations								   :|
		| \( \pmb{E} \) 		| Identity Operator						| Any									| \[ \pmb{E}         \pmb{E}           =  \pmb{E} \]	|
		| \( \pmb{\sigma} \)	| Reflection through a (Mirror) Plane	| Plane									| \[ \pmb{\sigma}    \pmb{\sigma}      =  \pmb{E} \]	|
		| \( \pmb{C}_{n} \)		| Rotation about an Axis				| Axis									| \[ \pmb{C}_{n}^{m} \pmb{C}_{n}^{n-m} =  \pmb{E} \]	|
		| \( \pmb{S}_{n} \)		| Improper Rotation 					| [Top]("Axis and Plane") [img](Img/top.png)		| \[ \pmb{S}_{n}^{m} \pmb{A} = \pmb{E} \left \{ \begin{matrix} n \in \text{Even} & \pmb{A} = \pmb{S}_{n}^{n-m} \\ n \in \text{Odd} & \pmb{A} = \pmb{S}_{n}^{2n-m} \end{matrix} \right. \]	|
		| \( \pmb{i} \)			| Inversion 							| Point									| \[ \pmb{i}         \pmb{i}           =  \pmb{E} \]	|
			\( \pmb{S}_{2} = \pmb{i} \)
			\( \pmb{S}_{n} = \pmb{\sigma}_{h} \pmb{C}_{n} \)
		Symmetry Elements:  Point, Line, or Plane that a *Symmetry Operator* is relative to. 
		Conventions on Coordinate Systems & Special Operators
			[img3](Img/xyz-coordinates.png)
			Principle Axis: Highest Rotational Symmetry
				z-axis
				Through as many atoms OR Through as many bonds
			|: Symbol			   		:| Description																									|: Symmetry Element			:|
			| \( \pmb{\sigma}_{h} \)     | x,y-plane																									|: Plane					:|
			| \( \pmb{\sigma}_{v} \)     | Colinear with Principle (z-)Axis																				|: Plane					:|
			| \( \pmb{\sigma}_{d} \)     | A \( \pmb{\sigma}_{v} \) bisecting two \( \pmb{C}_{\perp,n} \) or bisecting two \( \pmb{\sigma}_{v} \)		|: Plane					:|
			| \( \pmb{C}_{\perp,n} \)    | Rotation axis perpendicular to the Principle (z-)Axis. On the x,y-plane.										|: Axis						:|
		Point Groups
			\( C_{1} = \{ \pmb{E}														\}	\)
			\( C_s   = \{ \pmb{E},	\pmb{\sigma}										\}	\)
			\( C_i   = \{ \pmb{E},	\pmb{i}												\}	\)
			\( C_n   = \{ \pmb{E},	\pmb{C}_{n}											\}	\)
				There are always n-1 \( \pmb{C}_{n} \) point groups. 
			\( C_nv  = \{ \pmb{E},	\pmb{C}_{n},	\pmb{\sigma}_{v}					\}	\)
				\( C_{\infty,v} \)
				There are always n-1 \( \pmb{C}_{n} \) point groups. 
				There are always n   \( \pmb{\sigma}_{v} \) point groups. 
				Example: C_2v Point Group [md](3_Chem/Example_C2v_Point_Group.md)
			\( C_nh  = \{ \pmb{E},	\pmb{C}_{n},	\pmb{\sigma}_{h},	\pmb{S}_{n}		\}	\)	
				There are always n-1 \( \pmb{C}_{n}      \) point groups. 
				There are always n-1 \( \pmb{S}_{n}      \) point groups. 
				There's one          \( \pmb{\sigma}_{h} \) point groups. 
			\( D_n   = \{ \pmb{E},	\pmb{C}_{n}, \pmb{C}_{\perp,n}						\}	\)	
			\( D_nd  = \{ \pmb{E},	\pmb{C}_{n}, \pmb{C}_{\perp,n}, \pmb{\sigma}_{d}	\}	\)	
			\( D_nh  = \{ \pmb{E},	\pmb{C}_{n}, \pmb{C}_{\perp,n}, \pmb{\sigma}_{h},	\pmb{S}_{n}	\}	\)	
				\( D_{\infty,h} \): Linear Molecules with Inversion Centers.
			\( S_2n   = \{ \pmb{E},	\pmb{S}_{n}											\}	\)	
				2n must be even or it'd just be C_nh.
			Special Point Groups
				\( D_{\infty,h} \):	Linear Molecules with Inversion Centers.
				\( C_{\infty,v} \):	Linear Molecules
				\( T_d \):			Tetrahedral Molecules
				\( T_h \):			Tetrahedral Symmetry, \( \pmb{\sigma}_{h} \)
				\( O_h \):			Octahedral Symmetry
				\( I_h \):			Icosahedral Symmetry
				\( K_h \):			Spherical Symmetry
				