# learning

# GIT
## versionamento
- Histórico
- Controle de versão
- Quem alterou
- O quê alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalação do Git
windows: https://git-scm.com/
Linux (apt-get): sudo apt-get install git
Mac (brew): brew install git

## Criar conta no GitHub

## Clonar o projeto
git clone https://github.com/PineBR/learning.git

## Commits
Informação de alteração
- após testado todo seu código
- git add *
- git commit -m "mensagem"
- git push (envia alterações para o repositório)
- git pull (trazer alterações do github para sua máquina)

## GitFlow
Fluxo do Git

### Branchs
Ramificações do código/ versões paralelas
- main/master (quando se torna público)
- develop (fase de testes)
- DOD (Definition of Done = critérios de aceite)
- versionamento 0.1.10

### Merge
- mescla de branchs
- git merge main
- precisa resolver conflitos manualmente

### Pull Requests
- mescla de branchs no repositório
- permite code review (outros desenvolvedores visualizam)
- repositório resolve automaticamente

### Configurando o GitFlow
- git flow init
- git flow feature start nomequequiser (dado o nome, começa a configurar)
- git flow feature finish nomequequiser (depois de tudo configurado)