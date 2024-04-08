# Repro for issue 6972

## Versions

firebase-tools: v13.7.1<br>
node: v20.5.1

## Steps to reproduce issue

1. Run `npm i`
2. Run `firebase emulators:start --project demo-project`
3. On a separate terminal, run `npm run start`
4. Open [127.0.0.1](http://127.0.0.1:3000/)
5. Click "Choose File"
   - Select a file to upload
6. Click "Upload"
   - console logs shows:

```json
{
  "photoURL": "http://127.0.0.1:9199/v0/b/demo-project.appspot.com/o/some_user_uid%2Fphotos%2Ftest-img.png?alt=media&token=3ee9c5ab-827b-46f9-8e3c-a33055b2a583"
}
```

7. Open [http://127.0.0.1:4000/storage](http://127.0.0.1:4000/storage)
   - Contains the uploaded file
