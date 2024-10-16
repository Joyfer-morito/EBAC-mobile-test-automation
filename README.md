## O que Tem Aqui
- **app**: Diretório com a aplicação em teste.
- **test**: Diretório com os testes automatizados escritos em WebDriverIO.
- **allure-results** e **allure-report**: Diretórios com os resultados dos testes e relatórios gerados pelo Allure.
- **wdio.conf.js**: Arquivo de configuração do WebDriverIO.
- **package.json** e **package-lock.json**: Arquivos de configuração das dependências do projeto.

## O que Você Precisa
- **WebDriverIO**: Framework de automação para testes end-to-end.
- **Allure Reports**: Ferramenta para gerar relatórios detalhados dos testes.

## Como Usar
1. Clone o repositório: `git clone`
2. Entre na pasta do projeto: `cd nome-do-repositorio`
3. Instale as dependências: `npm install`
4. Execute os testes: `npx wdio run wdio.conf.js`
5. Gere o relatório Allure: `allure generate allure-results --clean -o allure-report`
