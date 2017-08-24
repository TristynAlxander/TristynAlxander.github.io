#Fluids

[Liquids]("Distinct Volume, Indistinct Shape")
	Concentrations
		Solution: Sum of Constitutes.
			Constituents:
				Solvent: Dissolves 
				Solute: Dissolved
		||
		| \( \frac{N_i}{V_T} \)				| (M = mol/L)		| Molarity: [X]			&
		| \( \frac{N_i}{m_{j}} \)			| (m = mol/kg)		| Molality				&
		| \( \frac{[X]}{f_{eq}} \) 			| (N=Eq/L)			| Normality 			&
		| \( at% = mol% = \frac{N}{N_T} \)	| (unitless)		| Mole Fraction			&
		| \( vol% = v% = \frac{V_i}{V_T} \)	| (unitless)		| Volume Fraction		&
		| \( m% = wt% = \frac{m_i}{m_T} \)	| (unitless)		| Weight/Mass Fraction	&
		| \( \frac{N_i}{N_T} \times 10^2 \)	| (%)				| Percent				&
		| \( \frac{N_i}{N_T} \times 10^3 \)	| (ppt)				| Parts Per Thousand	&
		| \( \frac{N_i}{N_T} \times 10^6 \)	| (ppm)				| Parts Per Million		&
		| \( \frac{N_i}{N_T} \times 10^9 \)	| (ppb)				| Parts Per Billion		&
		||
		Variables:
			||
			| \( ?_i \)			| (unitless)		| Constituents			&
			| \( ?_j \)			| (unitless)		| Solvent				&
			| \( ?_T \)			| (unitless)		| Solution				&
			| N					| (mol)				| Number				&
			| V					| (L)				| Volume				&
			| m					| (kg)				| Mass					&
			| \( f_{eq} \)		| (mol/g?)			| Equivalence Facor		&
			||
		Dilution Equation:
			\[ C_i V_i = C_f V_f \]
			Variables:
				||
				| i		| (unitless)			| Initial		&
				| f		| (unitless)			| Final			&
				| C		| ()					| Concentration	&
				| V		| (L)					| Volume		&
				||
	Osmolarity
		\[ \Delta \mu_{i} = RT \ln(a_{i}) = \Pi V_{i} \]
		\[ \Pi = \rho g \Delta h \]
		Van’t Hoff Equation: \[ \Pi = c i R T \]
		\[ \frac{\Pi}{c} = \frac{RT}{M} \left[ 1 + A_2 c + A_3 c^2 + … \right] \]
			\[ A_2 = \left( \frac{M v^2}{V_i} \right) \left( \frac{1}{2} - \chi_{i,j} \right) \]
			\[ A_3 = \frac{1}{3} \left( \frac{M v^3}{V_i} \right) \]
		Variables 
			||
			| M				| ()	| Number Average Molecular Weight	&
			| \( \nu \)		| ()	| Specific Volume					&
			| \( \mu \)		| ()	| Chemical Potential				&
			| T				| (K)	| Temperature						&
			| i				| ()	| Van't Hoff Factor 				&
			| \( \Pi \)		| ()	| Osmotic Pressure					&	
			| \( \rho \)	| ()	| Density							&
			| h				| ()	| Osmotic Head (Hight)				&
			| V				| ()	| Volume							&
			||
			||
			| Ideal Gas Constant						|: \(R = 8.3144621 (kg m^{2} s^{-2} mol^{-1} K^{-1}) \)	:|:	(kg m^2 s^-2 mol^-1 K^-1), (J mol^-1 K^-1)	:|:	8.3144621 :&
			| Near-Earth Gravitational Acceleration		|:	\(g = 9.80665 (m s^{-2})\)							:|:	(m s^-2)		:|:	9.80665 	:&
			||