Deposition
Lithography
	Masks
		Width
		Spacing
		Pitch: minimum feature size, 2 \lambda
Etch & Clean
	Dry Etch
	Wets Etch
	Deep Reactive ion etching (DRIE): Alternate Passivation and Etch
	Bosch Process: Alternate Passivation and Etch
		

In-Line Tests
	Pre-Production
		IC Design Verification
			Tests Design
	Wafer Fabrication
		In-Line Parametric Test
			Tests Test-Structures
		Wafer Sort (Probe)
			Tests Die
	Packaged IC
		Burn-In Reliability
			Tests Stresses
		Final Test
			Tests Function
	
	Design Methods to help flatten
		Cheesing: Extra dielectric in large structures
		Dummy Fill: Doesn't actually touch anything.
		Super Fill: Over 


TSV Mid
	FEOL
	Nail Formation
		Etch High
			Deep Reactive ion etching (DRIE)
			Bosch
			Aspect ratio
			Vary anisotropic
			Depth uniformity
		Oxide
			CVD
			Conformativity is key
			Step Coverage
			Termal Budget
		Barrier & Seed
			PVD, Ionized PVD
		Plating
			Electro-Chemical Deposition
			Ideally bottom up filling
			Low overburden
			Low Stress
		CMP
	BEOL
	Bump formation
	Glass Carrier
	Back Grinding
	Passivation
	TSV exposure
	u-pad

Wafer Bonding
	Without inter layers
		Fusion
			Si-O-H + Si-O-H --> Si-O-H --- Si-O-H --> Si-O-H-O-Si
		Anodic
	With inter Layers
		Metals
			Solder
			Solid-State: ThermoCompression 
		Glass Fret
		Polymer Adhesive

Damascene
	Single Damascene
		nBLoK Deposition
		SiCOH Deposition
		TEOS Deposition
		Lithogrophy Deposition
			Optical Planerizer
			Anti-Reflective
			Photoresist
		Litho Exposure
		Etch to nBLoK
		Litho Strip
		Barrier / Liner / Seed
		Cu Plating
		CMP to SiCOH
	Dual Damascene
		nBLoK Deposition
		SiCOH Deposition
		TEOS Deposition
		Lithogrophy Deposition
			Optical Planerizer
			Anti-Reflective
			Photoresist
		Litho Exposure (small)
		Etch to nBLoK
		Litho Strip
		Litho Deposition
			Optical Planerizer
			Anti-Reflective
			Photoresist
		Litho Exposure (Big)
		Etch to Half SiCOH
		Litho Strip
		Barrier / Liner / Seed
		Cu Plating
		CMP to SiCOH

Electro-Chemical Deposition (Plating)
	Current Density
	pH (low)
	Wafer Radius
	Tempurature
	Feature Size
	Chemistry
		Suppressor
		Accelerator
		Leveler
	Reactors
		Conventional
		Computational Fluid Dynamics (CFD)
CMP Sector 
	Process Locations
		Back End
			Damascene 
				Remove Bulk Cu
				Remove Barrior Film
				Idealy Stop Polish at Inter Level Dielectric (ILD)
				Really, Overpolish.
		Fron End
			Shallow Trench Isolation (STI)
	Polishing Pad
		Material: Polyurethane and Polyester based
		Groove dimensions and pattern
		Density/Elasticity
		Hardness: 50-70 Shore D
		Porosity: 20-50um
		Asperity
		Subpad Thickness/Elasticity
		Platen Rotational Velocity: 15-120 rpm
	Conditioning Disk
		Diamond/Nylon
		“Grit” size
		Conditioning Disk Down Force: 2-10 lb
	Slurry
		Abrasives: silica or ceria
		Particle Size Distribution: .5 um
		Chemistry: Oxidizer 
		Slurry Flow rate: 200–400 ml/min
	Head Retaining Ring
		Groove Dimensions and pattern
		"Holds" Wafer 
		Head Rotational Velocity: Typically slightly less than PRV
		Head Pressure: 0.5 - 5 psi
	Reflectivity vs Time
		Polish
		Breakthrough Point
		Clearing
		Clear Point
		Overpolish
