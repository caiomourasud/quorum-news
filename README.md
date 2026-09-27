# Informativo do Quórum de Élderes

Editor do informativo mensal. A página é editada no próprio informativo e exportada como imagem (PNG) ou PDF.

- **Online:** https://caiomourasud.github.io/quorum-news/
- **No computador:** abra o `index.html` no Chrome (mantenha a pasta `assets` junto).

## Todo mês

1. Clique em **Novo mês**. É criada a edição do mês seguinte à mais recente, como cópia dela: os domingos já vêm preenchidos, e Discursos, Vem, e Segue-me e Aniversariantes começam vazios. O mês anterior continua salvo.
2. Clique em qualquer texto da página e digite. **Enter** termina a edição. Acima do texto aparece uma barra para mudar fonte, tamanho, negrito, itálico, sublinhado, cor, destaque e link, ou para limpar a formatação. Atalhos: ⌘B, ⌘I, ⌘U e ⌘K (link).
   - Para pôr um link num discurso, selecione o texto e clique no ícone de corrente (sem seleção, o link vale para o texto todo). O link funciona no PDF; na imagem PNG ele aparece sublinhado, mas não é clicável.
3. Passe o mouse sobre um quadro para ver os botões **+** (adicionar) e **×** (remover). Itens vazios não saem no informativo.
4. Para trocar a foto, passe o mouse sobre ela e clique em **Trocar imagem**. Também dá para arrastar um arquivo para a janela ou colar com ⌘V. Arraste a foto para ajustar o enquadramento.
5. Clique em **Publicar** para gravar a edição no GitHub. Quem abrir o site passa a ver essa versão.
6. Exporte com **Baixar imagem** (PNG 1600×2240, bom para o WhatsApp) ou **PDF / Imprimir** (escolha "Salvar como PDF").

Se aparecer o aviso vermelho, o conteúdo não coube na página: encurte um texto ou remova um item.

## Publicar e compartilhar

Cada edição é um arquivo em `edicoes/AAAA-MM.json` neste repositório (as fotos ficam em `imagens/`). O site lê direto do GitHub, então a versão publicada aparece na hora para todos.

- Enquanto você edita, as alterações ficam salvas só no seu navegador. O status ao lado do mês mostra **Alterações não publicadas** até você clicar em **Publicar**.
- Se outra pessoa publicou a mesma edição depois que você começou a editar, o site avisa antes de substituir a versão dela.
- **Os aniversariantes não são publicados.** São dados pessoais e o repositório é público: eles ficam só no navegador de quem preenche e saem normalmente no PNG e no PDF.
- No menu do mês: **Descartar alterações** volta para a versão publicada, e a lixeira exclui uma edição (do navegador e do GitHub).

### Chave de acesso (uma vez por navegador que publica)

Para ver as edições não precisa de nada. Para publicar, o navegador precisa de uma chave:

1. O dono do repositório entra em [github.com › Fine-grained tokens](https://github.com/settings/personal-access-tokens/new) e cria uma chave:
   - **Repository access:** Only select repositories → `quorum-news`
   - **Permissions → Contents:** Read and write
   - **Expiration:** a data que preferir (quando vencer, é só criar outra)
2. No site, clique em **Publicar** (ou no menu do mês → **Conexão com o GitHub…**) e cole a chave. Ela fica guardada só naquele navegador.

Para o secretário, a mesma chave pode ser colada no navegador dele. Trate a chave como senha: quem a tiver consegue alterar os arquivos deste repositório (e só deste).

## Backup

No menu do mês, **Salvar backup de todas as edições** baixa um arquivo `.json` com tudo o que está no navegador, inclusive os aniversariantes. **Restaurar backup…** (ou arrastar o arquivo para a janela) traz de volta.

## Arquivos

- `index.html`: o editor.
- `assets/config.js`: o repositório onde as edições são publicadas.
- `assets/fontes.js`: as fontes (Alegreya e Alegreya Sans), embutidas.
- `assets/imagem-padrao.js`: a imagem original, usada em "Original".
- `edicoes/` e `imagens/`: as edições publicadas.
