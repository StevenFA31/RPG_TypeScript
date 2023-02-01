# Crée une application TypeScript orientée objets en ligne de commande de combat de héros en arène.

# Contexte du projet

## Partie 1 : Héros

​

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

name : string
power : number
life : number
​

Et les méthodes

attack(opponent: Hero)
isAlive()
​

La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

Exemple : Si Joan attaque Leon, cela sera représenté par :

joan.attack(leon)
​

La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

## Partie 2 : Armes

Crée une classe `Weapon` avec la propriété suivante :

name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

​
Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

​

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

`HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
`HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
`HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

​
Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.

## Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

### Bonus 1 : Les dégâts de l'arme

Ajoute une propriété damage à la classe Weapon et fait en sorte qu'elle soit initialisée par le constructeur.

Modifie la méthode attack de Hero afin que les dégâts soient calculés de la façon suivante : la puissance du héro power + les dégâts de l'arme power

### Bonus 2 : Interface graphique

Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)
