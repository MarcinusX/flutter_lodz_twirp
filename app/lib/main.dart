import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late final TextEditingController textController;
  //TODO: Change to models
  List<dynamic> stateManagements = [];
  // late final FlutterLodzClient client;

  @override
  void initState() {
    super.initState();
    textController = TextEditingController();
    // client = FlutterLodzClient(
    //   'localhost',
    //   port: 8000,
    //   options: ClientOptions(credentials: ClientCredentials.insecure()),
    // );
    _refreshManagements();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('State Managements XD')),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: RefreshIndicator(
                onRefresh: _refreshManagements,
                child: ListView(
                  children: stateManagements
                      .map((sm) => ListTile(
                            title: Text(sm.name),
                            subtitle: Text('id: ${sm.id}'),
                            trailing: Text('${sm.rating}/10'),
                          ))
                      .toList(),
                ),
              ),
            ),
            Row(
              children: [
                SizedBox(width: 16),
                Expanded(
                  child: TextField(
                    controller: textController,
                  ),
                ),
                IconButton(
                  onPressed: _onSubmit,
                  icon: Icon(Icons.send),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  void _onSubmit() async {
    // //post to client
    // await client.proposeStateManagement(
    //   StateManagementProposal(name: textController.text),
    // );
    //clear controller
    textController.clear();
    //get all managements
    await _refreshManagements();
  }

  Future<void> _refreshManagements() async {
    // final response = await client.listStateManagements(
    //   ListStateManagementsRequest(),
    // );
    // setState(() => stateManagements = response.stateManagements);
  }
}
