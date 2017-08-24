Graphical User Interface (GUI)
	AWT (Abstract Windowing Toolkit), package 
		Component classes
		Container classes
Basics
	Program Development
		Algorithm: Instrucvtions for solving a problem
		Pseudo-code: Human Readable, but not computer readable.
			Program: Computer Readable Instructions
			Source Code (Language): Human readable program.
			Compiler: Translates source code to machine code.
			Machine Code: 1's and 0's as electrical pulses.
		Statement: Smallest exicutable unit.
		Declaration: Statement introducing a variable.
	Comments
		Comments: Text not processed by Compiler.
		Block Comments: Start signal and end signal.
		Line Comments: Start signal, ends at endline.
	Assignment Statement
		Variable: Holds Information.
		Primitives: Simplest Langauge Unit.
		Literals: Notations for particular values.
	Identifier: Points to Information.
	Assignment Operator: Connects identifier to variable.

Java Primitives
	||
	| Primitive		| Bits	|	Min			|	Max					|	Category				&
	| ``boolean``	| 1		|	false		|	true				|							&
	| ``byte``		| 8		|	-128		|	127					|	Integer, Textual		&
	| ``char``		| 16	|	0			|	2^16 - 1			|	Integer, Textual		&
	| ``short``		| 16	|	-2^15		|	2^15 - 1			|	Integer, Numeric		&
	| ``int``		| 32	|	-2^31		|	2^31 - 1			|	Integer, Numeric		&
	| ``long``		| 64	|	-2^63		|	2^63 - 1			|	Integer, Numeric		&
	| ``float``		| 32	|	-2^-149		|	(2-2^-23)2^127		|	Floating-point, Numeric	&
	| ``double``	| 64	|	-2^-1074	|	(2-2^-52)2^1023		|	Floating-point, Numeric	&
	| ``null``		|		|				|						|							&
	||
	Legal Identifiers
		Not Keywords
		Start: a-z, A-Z, _, $
		Composition: a-z, A-Z, 0-9, _, $
	Naming Conventions
		Start: lowercase letters
		Composition: Full Words, CamelCase.
	char uses UTF-16 as charcters between ' ' or numbers, including: \b, \t, \n, \f, \r, \", \', and \\
	Numberics can use underscores if not adjacent decimals, suffixes, or prefixes. 

Scope
	||
	|				| Class	| Package	| Subclass	| World		&
	| public 		|	+	|	+		|	+		|	+		&
	| protected		|	+	|	+		|	+		|			&
	| no modifier	|	+	|	+		|			|			&
	| private		|	+	|			|			|			&
	||
	Local Variables: Variables specific to a suite or method.
	Instance Variables: Variabels Specific to an Instance.
	Global Variables: 
.
Operators
	**Assignment Operator:** ``=``
	**Arithmetic Operators**
		||
		| Symbol		|					|:	Shorthand	:|				|	Name				&
		| ``+``			|	``x = x + i;``	|:	&#x2192;	:|	``x += i;``	|	Addition			&
		| ``-``			|	``x = x - i;``	|:	&#x2192;	:|	``x -= i;``	|	Subtraction			&
		| ``*``			|	``x = x * i;``	|:	&#x2192;	:|	``x *= i;``	|	Multiplication		&
		| ``/``			|	``x = x / i;``	|:	&#x2192;	:|	``x /= i;``	|	Division			&
		| ``%``			|	``x = x % i;``	|:	&#x2192;	:|	``x %= i;``	|	Remainder (Modulo)	&
		||
	**Relational Operator:** Compares Numeric Primitives
		||
		| ``==``	|	is Equal				&
		| ``!=``	|	is Not Equal			&
		| ``<``		|	is Less					&
		| ``<=``	|	is Less Or Equal		&
		| ``>``		|	is Greater				&
		| ``>=``	|	is Greater Or Equal		&
		||
	**Logical Operator:** Compares Booleans
		||
		| ``!``		|	Not		&
		| ``&&``	|	And		&
		| ``||``	|	Or		&
		||

Classes of Control Structures
	Sequence: Natural Execution
		Selection:
			if, else if (elseif), and else
			switch, case, and default
		Repetition:
			Loops: for, while, and do-while.
			continue: Stops current iteration, continues in Control Structure.
			break: Stops current iteration, Exits Control Structure.
	Nested Statments: Statments in a control structure.
	Suite: Set of statments in a control structure.
	Compound Statment: Control structure and sub-statments. 

Methods:
	Functions specific to a class.
		Method Heading: double myMethod(int i)
		Return Type: double
		Method Identifier: myMethod
		Formal Perameter: (int i)
		Method Signature: myMethod(int)
		Method Identifier: myMethod
		Method Arguments: (int)
	Overloading: Identical identifiers, different perameters.
	Keyword return: Returns a value.


Classes
	Classes: Templates for Objects.
		Objects: Instances of Classes.
		Have state conditions.
		Instance: Unique Version.
		Instances are instantiated with the keyword new.
	Attribute: Information associated with a class or instance.
		Instance Variables: Variabels Specific to an Instance.
		``this``: reference to the current object.
		Constructors: Method that initializes instances.
		Have the same name as the class.
		Return type implied.
	Accessor/Mutator (Getter/Setter) Methods: Used to get/set variables.
	Cohesion: Concept matches code.
	Coupling: Depending on other classes.
	Sub/Sup Class
		Inheritance: Subclasses has all methods & variables of superclasses.
		Class Header: ``class mySubClass extends mySupClass``
		Keyword ``super``: Refers to parent class.
		Java doesn't support multiple inheritance.
	Polymorphism: instanceof tests are true for multiple objects.
	Overriding: sub methods override sup's identical methods signitures.



Interfaces
	All methods are abstract and public.
	There are no Instance Variables.
	Essentially just a list of methods.
	Class Header: ``public class MyClass implements MyInterfaces``
	A class implementing an interface must declare each method in the interface.

Keywords
	``final``: immutable
	``import``
	``static``
	``dynamic``
	``abstract`` 
		Abstract methods have no body. 
		Abstract classes contain abstract methods. 