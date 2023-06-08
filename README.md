# Домашнее задание к лекции «Классы, наследование»
Важно: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

Важно: код должен проходить ESLint без ошибок.

Важно: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

Важно: решения должны быть построены на базе шаблона Webpack.

## Классы, наследование
### Легенда
Вы решили перейти на классы и реализовать иерархию, выделив в качестве базового класса класс Character, а для остальных персонажей создать классы, наследующиеся от него.

### Описание
Реализуйте описанную иерархию классов: класс Character является родительским для всех остальных, 6 дочерних классов Bowerman, Swordsman, Magician, Daemon, Undead, Zombie от него наследуются, сами задавая свои характеристики.

### Свойства, которые должны быть у объектов класса Character:

- name - имя
- type - тип
- health - уровень жизни
- level - уровень персонажа
- attack - атака
- defence - защита
Конструктор класса должен соответствовать следующим требованиям:

name - строка, min - 2 символа, max - 10
type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
В случае, если передаются некорректные значения, должна выбрасываться ошибка (throw new Error(...)).

В вашей функции автоматически должны устанавливаться значения следующих полей:

-работоспособность: 100
-уровень: 1
-Атака/защита:
-Боумен: 25/25
-Фехтовальщик: 40/10
-Волшебник: 10/40
-Нежить: 25/25
-Зомби: 40/10
-Демон: 10/40
