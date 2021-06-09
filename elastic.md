```
{
  "settings": {
    "analysis": {
      "analyzer": {
        "message_analyzer": {
          "tokenizer": "icu_tokenizer",
          "char_filter": [
            "html_strip"
          ],
          "filter": [
            "icu_folding",
            "lowercase"
          ]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "appId": {
        "type": "keyword"
      },
      "deleted": {
        "type": "boolean"
      },
      "blocks": {
        "properties": {
          "content": {
            "type": "text",
            "analyzer": "message_analyzer"
          }
        }
      },
      "author": {
        "properties": {
          "name": {
            "type": "text",
            "analyzer": "message_analyzer"
          },
          "firstName": {
            "type": "text",
            "analyzer": "message_analyzer"
          },
          "lastName": {
            "type": "text",
            "analyzer": "message_analyzer"
          }
        }
      },
      "channel": {
        "type": "text"
      },
      "channelType": {
        "type": "text"
      }
    }
  }
}
```
