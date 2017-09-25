Search.setIndex({docnames:["INSTALL","api/modules","api/sonnet","api/sonnet.examples","api/sonnet.python","api/sonnet.python.custom_getters","api/sonnet.python.modules","api/sonnet.python.modules.nets","api/sonnet.python.ops"],envversion:52,filenames:["INSTALL.rst","api/modules.rst","api/sonnet.rst","api/sonnet.examples.rst","api/sonnet.python.rst","api/sonnet.python.custom_getters.rst","api/sonnet.python.modules.rst","api/sonnet.python.modules.nets.rst","api/sonnet.python.ops.rst"],objects:{"":{sonnet:[2,0,0,"-"]},"sonnet.examples":{dataset_shakespeare:[3,0,0,"-"],module_with_build_args:[3,0,0,"-"],rnn_shakespeare:[3,0,0,"-"]},"sonnet.examples.dataset_shakespeare":{SequenceDataOpsNoMask:[3,1,1,""],TinyShakespeareDataset:[3,1,1,""],TokenDataSource:[3,1,1,""]},"sonnet.examples.dataset_shakespeare.SequenceDataOpsNoMask":{obs:[3,2,1,""],target:[3,2,1,""]},"sonnet.examples.dataset_shakespeare.TinyShakespeareDataset":{TEST:[3,2,1,""],TRAIN:[3,2,1,""],VALID:[3,2,1,""],cost:[3,3,1,""],to_human_readable:[3,3,1,""],vocab_size:[3,2,1,""]},"sonnet.examples.dataset_shakespeare.TokenDataSource":{CHAR_EOS:[3,2,1,""],DEFAULT_START_TOKENS:[3,2,1,""],NULL:[3,2,1,""],UNK:[3,2,1,""],WORD_EOS:[3,2,1,""],decode:[3,3,1,""],tokenize:[3,3,1,""]},"sonnet.examples.module_with_build_args":{custom_build:[3,4,1,""],main:[3,4,1,""]},"sonnet.examples.rnn_shakespeare":{TextModel:[3,1,1,""],build_graph:[3,4,1,""],main:[3,4,1,""],train:[3,4,1,""]},"sonnet.examples.rnn_shakespeare.TextModel":{generate_string:[3,3,1,""]},"sonnet.python":{custom_getters:[5,0,0,"-"],modules:[6,0,0,"-"],ops:[8,0,0,"-"]},"sonnet.python.custom_getters":{context:[5,0,0,"-"],non_trainable:[5,0,0,"-"],restore_initializer:[5,0,0,"-"],stop_gradient:[5,0,0,"-"]},"sonnet.python.custom_getters.context":{Context:[5,1,1,""]},"sonnet.python.custom_getters.non_trainable":{non_trainable:[5,4,1,""]},"sonnet.python.custom_getters.restore_initializer":{restore_initializer:[5,4,1,""]},"sonnet.python.custom_getters.stop_gradient":{stop_gradient:[5,4,1,""]},"sonnet.python.modules":{attention:[6,0,0,"-"],base:[6,0,0,"-"],basic:[6,0,0,"-"],basic_rnn:[6,0,0,"-"],batch_norm:[6,0,0,"-"],block_matrix:[6,0,0,"-"],clip_gradient:[6,0,0,"-"],conv:[6,0,0,"-"],embed:[6,0,0,"-"],experimental:[6,0,0,"-"],gated_rnn:[6,0,0,"-"],layer_norm:[6,0,0,"-"],nets:[7,0,0,"-"],pondering_rnn:[6,0,0,"-"],residual:[6,0,0,"-"],rnn_core:[6,0,0,"-"],scale_gradient:[6,0,0,"-"],sequential:[6,0,0,"-"],spatial_transformer:[6,0,0,"-"],util:[6,0,0,"-"]},"sonnet.python.modules.attention":{AttentionOutput:[6,1,1,""],AttentiveRead:[6,1,1,""]},"sonnet.python.modules.attention.AttentionOutput":{read:[6,2,1,""],weight_logits:[6,2,1,""],weights:[6,2,1,""]},"sonnet.python.modules.base":{AbstractModule:[6,1,1,""],ConnectedSubGraph:[6,1,1,""],DifferentGraphError:[6,6,1,""],Error:[6,6,1,""],IncompatibleShapeError:[6,6,1,""],Module:[6,1,1,""],NotConnectedError:[6,6,1,""],NotInitializedError:[6,6,1,""],NotSupportedError:[6,6,1,""],ParentNotBuiltError:[6,6,1,""],SubgraphInputs:[6,1,1,""],Transposable:[6,1,1,""],UnderspecifiedError:[6,6,1,""]},"sonnet.python.modules.base.AbstractModule":{connected_subgraphs:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],get_variables:[6,3,1,""],is_connected:[6,2,1,""],last_connected_subgraph:[6,2,1,""],module_name:[6,2,1,""],name_scopes:[6,2,1,""],scope_name:[6,2,1,""],variable_scope:[6,2,1,""]},"sonnet.python.modules.base.ConnectedSubGraph":{builder:[6,2,1,""],inputs:[6,2,1,""],name_scope:[6,2,1,""],outputs:[6,2,1,""]},"sonnet.python.modules.base.SubgraphInputs":{args:[6,2,1,""],kwargs:[6,2,1,""]},"sonnet.python.modules.base.Transposable":{input_shape:[6,3,1,""],transpose:[6,3,1,""]},"sonnet.python.modules.basic":{AddBias:[6,1,1,""],BatchApply:[6,1,1,""],BatchFlatten:[6,1,1,""],BatchReshape:[6,1,1,""],FlattenTrailingDimensions:[6,1,1,""],Linear:[6,1,1,""],MergeDims:[6,1,1,""],SelectInput:[6,1,1,""],SliceByDim:[6,1,1,""],TileByDim:[6,1,1,""],TrainableVariable:[6,1,1,""],calculate_bias_shape:[6,4,1,""],create_bias_initializer:[6,4,1,""],create_linear_initializer:[6,4,1,""],merge_leading_dims:[6,4,1,""],split_leading_dim:[6,4,1,""]},"sonnet.python.modules.basic.AddBias":{POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],b:[6,2,1,""],input_shape:[6,2,1,""],transpose:[6,3,1,""]},"sonnet.python.modules.basic.BatchReshape":{input_shape:[6,2,1,""],transpose:[6,3,1,""]},"sonnet.python.modules.basic.Linear":{b:[6,2,1,""],clone:[6,3,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],output_size:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.basic.TrainableVariable":{POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],w:[6,2,1,""]},"sonnet.python.modules.basic_rnn":{DeepRNN:[6,1,1,""],ModelRNN:[6,1,1,""],VanillaRNN:[6,1,1,""]},"sonnet.python.modules.basic_rnn.DeepRNN":{initial_state:[6,3,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.basic_rnn.ModelRNN":{output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.basic_rnn.VanillaRNN":{HIDDEN_TO_HIDDEN:[6,2,1,""],IN_TO_HIDDEN:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],hidden_to_hidden_linear:[6,2,1,""],hidden_to_hidden_variables:[6,2,1,""],in_to_hidden_linear:[6,2,1,""],in_to_hidden_variables:[6,2,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.batch_norm":{BatchNorm:[6,1,1,""],create_beta_initializer:[6,4,1,""],create_gamma_initializer:[6,4,1,""],create_mean_initializer:[6,4,1,""],create_variance_initializer:[6,4,1,""]},"sonnet.python.modules.batch_norm.BatchNorm":{BETA:[6,2,1,""],GAMMA:[6,2,1,""],MOVING_MEAN:[6,2,1,""],MOVING_VARIANCE:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],POSSIBLE_PARTITIONER_KEYS:[6,2,1,""],POSSIBLE_REGULARIZER_KEYS:[6,2,1,""],beta:[6,2,1,""],gamma:[6,2,1,""],initializers:[6,2,1,""],moving_mean:[6,2,1,""],moving_variance:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""]},"sonnet.python.modules.block_matrix":{BlockDiagonalMatrix:[6,1,1,""],BlockTriangularMatrix:[6,1,1,""]},"sonnet.python.modules.block_matrix.BlockTriangularMatrix":{block_shape:[6,2,1,""],block_size:[6,2,1,""],input_size:[6,2,1,""],num_blocks:[6,2,1,""],output_shape:[6,2,1,""]},"sonnet.python.modules.clip_gradient":{clip_gradient:[6,4,1,""]},"sonnet.python.modules.conv":{CausalConv1D:[6,1,1,""],Conv1D:[6,1,1,""],Conv1DTranspose:[6,1,1,""],Conv2D:[6,1,1,""],Conv2DTranspose:[6,1,1,""],Conv3D:[6,1,1,""],Conv3DTranspose:[6,1,1,""],DepthwiseConv2D:[6,1,1,""],InPlaneConv2D:[6,1,1,""],SeparableConv2D:[6,1,1,""],create_bias_initializer:[6,4,1,""],create_weight_initializer:[6,4,1,""]},"sonnet.python.modules.conv.Conv1D":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],rate:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.Conv1DTranspose":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],output_shape:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.Conv2D":{b:[6,2,1,""],clone:[6,3,1,""],data_format:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],mask:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],rate:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.Conv2DTranspose":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],output_shape:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.Conv3D":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.Conv3DTranspose":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],output_shape:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],transpose:[6,3,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.DepthwiseConv2D":{b:[6,2,1,""],channel_multiplier:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_channels:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.InPlaneConv2D":{b:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_channels:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],w:[6,2,1,""]},"sonnet.python.modules.conv.SeparableConv2D":{b:[6,2,1,""],channel_multiplier:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],has_bias:[6,2,1,""],initializers:[6,2,1,""],input_channels:[6,2,1,""],input_shape:[6,2,1,""],kernel_shape:[6,2,1,""],output_channels:[6,2,1,""],padding:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""],stride:[6,2,1,""],w_dw:[6,2,1,""],w_pw:[6,2,1,""]},"sonnet.python.modules.embed":{Embed:[6,1,1,""]},"sonnet.python.modules.embed.Embed":{EMBEDDINGS:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],embed_dim:[6,2,1,""],embeddings:[6,2,1,""],vocab_size:[6,2,1,""]},"sonnet.python.modules.experimental":{reuse_vars:[6,4,1,""]},"sonnet.python.modules.gated_rnn":{BatchNormLSTM:[6,1,1,""],Conv1DLSTM:[6,1,1,""],Conv2DLSTM:[6,1,1,""],ConvLSTM:[6,1,1,""],GRU:[6,1,1,""],LSTM:[6,1,1,""]},"sonnet.python.modules.gated_rnn.BatchNormLSTM":{BETA_C:[6,2,1,""],B_GATES:[6,2,1,""],CoreWithExtraBuildArgs:[6,1,1,""],GAMMA_C:[6,2,1,""],GAMMA_H:[6,2,1,""],GAMMA_X:[6,2,1,""],IndexedStatsBatchNorm:[6,1,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],POSSIBLE_KEYS:[6,2,1,""],W_F_DIAG:[6,2,1,""],W_GATES:[6,2,1,""],W_I_DIAG:[6,2,1,""],W_O_DIAG:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],initial_state:[6,3,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""],use_batch_norm_c:[6,2,1,""],use_batch_norm_h:[6,2,1,""],use_batch_norm_x:[6,2,1,""],use_peepholes:[6,2,1,""],with_batch_norm_control:[6,3,1,""]},"sonnet.python.modules.gated_rnn.BatchNormLSTM.CoreWithExtraBuildArgs":{output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.gated_rnn.Conv1DLSTM":{get_possible_initializer_keys:[6,5,1,""]},"sonnet.python.modules.gated_rnn.Conv2DLSTM":{get_possible_initializer_keys:[6,5,1,""]},"sonnet.python.modules.gated_rnn.ConvLSTM":{convolutions:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.gated_rnn.GRU":{BH:[6,2,1,""],BR:[6,2,1,""],BZ:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],POSSIBLE_KEYS:[6,2,1,""],UH:[6,2,1,""],UR:[6,2,1,""],UZ:[6,2,1,""],WH:[6,2,1,""],WR:[6,2,1,""],WZ:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.gated_rnn.LSTM":{B_GATES:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],W_F_DIAG:[6,2,1,""],W_GATES:[6,2,1,""],W_I_DIAG:[6,2,1,""],W_O_DIAG:[6,2,1,""],get_possible_initializer_keys:[6,5,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""],use_layer_norm:[6,2,1,""],use_peepholes:[6,2,1,""]},"sonnet.python.modules.layer_norm":{LayerNorm:[6,1,1,""],create_beta_initializer:[6,4,1,""],create_gamma_initializer:[6,4,1,""]},"sonnet.python.modules.layer_norm.LayerNorm":{BETA:[6,2,1,""],GAMMA:[6,2,1,""],POSSIBLE_INITIALIZER_KEYS:[6,2,1,""],POSSIBLE_KEYS:[6,2,1,""],beta:[6,2,1,""],gamma:[6,2,1,""],initializers:[6,2,1,""],partitioners:[6,2,1,""],regularizers:[6,2,1,""]},"sonnet.python.modules.nets":{alexnet:[7,0,0,"-"],convnet:[7,0,0,"-"],dilation:[7,0,0,"-"],mlp:[7,0,0,"-"]},"sonnet.python.modules.nets.alexnet":{AlexNet:[7,1,1,""],AlexNetFull:[7,1,1,""],AlexNetMini:[7,1,1,""]},"sonnet.python.modules.nets.alexnet.AlexNet":{FULL:[7,2,1,""],MINI:[7,2,1,""],POSSIBLE_INITIALIZER_KEYS:[7,2,1,""],conv_modules:[7,2,1,""],initializers:[7,2,1,""],linear_modules:[7,2,1,""],min_input_size:[7,2,1,""],partitioners:[7,2,1,""],regularizers:[7,2,1,""]},"sonnet.python.modules.nets.convnet":{ConvNet2D:[7,1,1,""],ConvNet2DTranspose:[7,1,1,""]},"sonnet.python.modules.nets.convnet.ConvNet2D":{POSSIBLE_INITIALIZER_KEYS:[7,2,1,""],POSSIBLE_KEYS:[7,2,1,""],activate_final:[7,2,1,""],activation:[7,2,1,""],batch_norm_config:[7,2,1,""],initializers:[7,2,1,""],input_shape:[7,2,1,""],kernel_shapes:[7,2,1,""],layers:[7,2,1,""],output_channels:[7,2,1,""],paddings:[7,2,1,""],partitioners:[7,2,1,""],regularizers:[7,2,1,""],strides:[7,2,1,""],transpose:[7,3,1,""],use_batch_norm:[7,2,1,""],use_bias:[7,2,1,""]},"sonnet.python.modules.nets.convnet.ConvNet2DTranspose":{output_shapes:[7,2,1,""],transpose:[7,3,1,""]},"sonnet.python.modules.nets.dilation":{Dilation:[7,1,1,""],identity_kernel_initializer:[7,4,1,""],noisy_identity_kernel_initializer:[7,4,1,""]},"sonnet.python.modules.nets.dilation.Dilation":{BASIC:[7,2,1,""],BIASES:[7,2,1,""],LARGE:[7,2,1,""],POSSIBLE_INITIALIZER_KEYS:[7,2,1,""],WEIGHTS:[7,2,1,""],conv_modules:[7,2,1,""]},"sonnet.python.modules.nets.mlp":{MLP:[7,1,1,""]},"sonnet.python.modules.nets.mlp.MLP":{activate_final:[7,2,1,""],activation:[7,2,1,""],get_possible_initializer_keys:[7,5,1,""],initializers:[7,2,1,""],input_shape:[7,2,1,""],layers:[7,2,1,""],output_size:[7,2,1,""],output_sizes:[7,2,1,""],partitioners:[7,2,1,""],regularizers:[7,2,1,""],transpose:[7,3,1,""],use_bias:[7,2,1,""]},"sonnet.python.modules.pondering_rnn":{ACTCore:[6,1,1,""]},"sonnet.python.modules.pondering_rnn.ACTCore":{batch_size:[6,2,1,""],dtype:[6,2,1,""],initial_state:[6,3,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.residual":{Residual:[6,1,1,""],ResidualCore:[6,1,1,""],SkipConnectionCore:[6,1,1,""]},"sonnet.python.modules.residual.ResidualCore":{output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.residual.SkipConnectionCore":{output_size:[6,2,1,""],state_size:[6,2,1,""]},"sonnet.python.modules.rnn_core":{RNNCore:[6,1,1,""],TrainableInitialState:[6,1,1,""],trainable_initial_state:[6,4,1,""]},"sonnet.python.modules.rnn_core.RNNCore":{initial_state:[6,3,1,""],output_size:[6,2,1,""],state_size:[6,2,1,""],zero_state:[6,3,1,""]},"sonnet.python.modules.scale_gradient":{scale_gradient:[6,4,1,""]},"sonnet.python.modules.sequential":{Sequential:[6,1,1,""]},"sonnet.python.modules.sequential.Sequential":{get_variables:[6,3,1,""],layers:[6,2,1,""]},"sonnet.python.modules.spatial_transformer":{AffineGridWarper:[6,1,1,""],AffineWarpConstraints:[6,1,1,""],GridWarper:[6,1,1,""]},"sonnet.python.modules.spatial_transformer.AffineGridWarper":{constraints:[6,2,1,""],inverse:[6,3,1,""]},"sonnet.python.modules.spatial_transformer.AffineWarpConstraints":{combine_with:[6,3,1,""],constraints:[6,2,1,""],mask:[6,2,1,""],no_constraints:[6,5,1,""],no_shear_2d:[6,5,1,""],no_shear_3d:[6,5,1,""],num_dim:[6,2,1,""],num_free_params:[6,2,1,""],scale_2d:[6,5,1,""],scale_3d:[6,5,1,""],shear_2d:[6,5,1,""],translation_2d:[6,5,1,""],translation_3d:[6,5,1,""]},"sonnet.python.modules.spatial_transformer.GridWarper":{n_coeff:[6,2,1,""],output_shape:[6,2,1,""],psi:[6,2,1,""],source_shape:[6,2,1,""]},"sonnet.python.modules.util":{check_initializers:[6,4,1,""],check_partitioners:[6,4,1,""],check_regularizers:[6,4,1,""],format_variable_map:[6,4,1,""],format_variables:[6,4,1,""],get_normalized_variable_map:[6,4,1,""],get_saver:[6,4,1,""],get_variable_scope_name:[6,4,1,""],get_variables_in_module:[6,4,1,""],get_variables_in_scope:[6,4,1,""],has_variable_scope:[6,4,1,""],log_variables:[6,4,1,""],name_for_callable:[6,4,1,""],reuse_variables:[6,4,1,""],to_snake_case:[6,4,1,""],variable_map_items:[6,4,1,""]},"sonnet.python.ops":{initializers:[8,0,0,"-"],nest:[8,0,0,"-"]},"sonnet.python.ops.initializers":{restore_initializer:[8,2,1,""]},"sonnet.python.ops.nest":{flatten_iterable:[8,4,1,""],is_iterable:[8,4,1,""],pack_iterable_as:[8,4,1,""]},sonnet:{examples:[3,0,0,"-"],python:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:classmethod","6":"py:exception"},terms:{"3555v1":6,"abstract":6,"boolean":[6,7],"break":7,"case":[3,6,8],"char":3,"class":[3,5,6,7],"default":[0,3,5,6,7],"final":[6,7],"float":[6,7],"function":[2,3,5,6,7,8],"import":[0,2,6],"int":[3,6,7],"new":6,"null":3,"public":2,"return":[3,5,6,7,8],"super":6,"switch":[5,6],"true":[0,3,5,6,7,8],"try":[0,6],"while":6,For:[5,6],One:[3,6],Ops:6,Such:6,The:[2,3,5,6,7,8],Then:[0,6],These:[6,8],Used:3,__call__:[2,6],__init__:[2,6],_build:6,_clone:6,_enter_variable_scop:6,_eos_:3,_null_:3,_restor:8,_sentinel:6,_transpos:6,_unk_:3,abl:7,about:6,abov:[0,6],abs:[6,7],abstractmodul:[3,6,7],accept:[3,5,6],access:6,accord:6,accumul:6,accuraci:6,achiev:6,across:[3,6,7],act:6,act_cor:6,act_out:6,actcor:6,activ:[6,7],activate_fin:7,adapt:6,add:[0,3,6],add_x:6,addbia:6,added:[5,6,7],adding:6,addit:[6,7],addition:6,additional_constraint:6,advanc:6,advantag:6,affect:[5,6],affin:6,affine_grid_warp:6,affinegridwarp:6,affinewarpconstraint:6,after:[5,6,7,8],aggreg:[6,7],agnost:6,aid:6,alex:7,alex_net:7,alex_net_ful:7,alex_net_mini:7,alexnet:[2,4,6],alexnet_test:[2,4,6],alexnetful:7,alexnetmini:7,algorithm:6,alia:[3,6,8],all:[5,6,7],allow:[5,6,7,8],along:6,alreadi:[0,6],also:[6,8],alwai:6,ani:[2,6],anoth:[0,6],anyhow:6,anyth:6,apart:8,api:6,append:[6,7],appli:[5,6,7],arbitrari:6,arbitrarili:[6,8],architectur:[6,7],archiv:6,aren:6,arg:[3,5,6,7,8],argument:[3,5,6],ariti:6,around:6,arrai:[3,8],art:7,arxiv:[6,7],assembl:6,assign:6,assum:3,attempt:[5,6],attend:6,attent:[2,4],attention_logit_mod:6,attention_test:[2,4],attentionoutput:6,attentiveread:6,attribut:[5,6],attributeerror:6,automat:[2,6],avail:6,averag:[3,6],awai:6,axi:6,b_gate:6,back:8,background:6,backward:6,base:[2,3,4,5,7],base_cor:6,base_modul:6,base_num_channel:7,base_test:[2,4],bash:0,basi:7,basic:[2,4,7],basic_rnn:[2,4],basic_rnn_test:[2,4],basic_test:[2,4],batch:[3,6,7],batch_appli:6,batch_dim_from:6,batch_flatten:6,batch_norm:[2,4],batch_norm_config:7,batch_norm_lstm:6,batch_norm_test:[2,4],batch_reshap:6,batch_siz:[3,6],batchappli:6,batchflatten:6,batchnorm:[3,6,7],batchnormlstm:6,batchreshap:6,bazel:3,becaus:6,becom:6,been:[0,3,5,6,8],befor:[3,6,7],begin:6,behavior:8,behaviour:3,being:[5,6],beta:6,beta_c:6,better:6,between:6,bia:[6,7],bias:[6,7],bias_dim:6,bias_shap:6,bin:0,binari:0,block:6,block_diagonal_matrix:6,block_matrix:[2,4],block_matrix_test:[2,4],block_row:6,block_shap:6,block_siz:6,block_triangular_matrix:6,blockdiagonalmatrix:6,blocktriangularmatrix:6,bn_on_fc_lay:7,bool:[3,6],both:[6,7],brief:2,broadcast:6,broader:6,build:[3,5,6,7],build_graph:3,builder:6,built:[0,6],c_t:6,cach:6,calcul:6,calculate_bias_shap:6,call:[0,2,3,5,6,7],callabl:6,caller:6,camel_cas:6,camelcas:6,can:[0,2,5,6,7],candid:6,cannot:[3,6,8],care:6,carefulli:6,causal:6,causal_conv_1d:6,causalconv1d:6,caveat:6,cell:6,cell_clip_valu:6,chang:6,channel:[6,7],channel_multipli:6,char_eo:3,charact:3,cheat:6,check:6,check_initi:6,check_partition:6,check_regular:6,checkpoint:[5,8],child:6,choos:6,cifar10:7,classif:7,classmethod:[6,7],clip:6,clip_gradi:[2,4],clip_gradient_test:[2,4],clip_value_max:6,clip_value_min:6,clip_values_max:6,clone:[0,6],cls:6,code:[0,6],coeffici:6,coher:6,collaps:6,collect:[5,6],column:6,com:[0,6],combin:6,combine_with:6,command:[0,3],common:[6,7],compat:6,compil:0,complement:8,complementari:6,compli:6,compon:6,comput:[3,6],concat:6,concat_final_output_if_skip:6,concaten:6,conceptu:2,configur:[6,7],connect:[0,2,6,7],connected_subgraph:6,connectedsubgraph:6,consid:[7,8],consist:[6,7,8],constitu:6,constraint:6,construct:[3,5,6,7],constructor:6,contain:[2,6,7,8],content:1,context:[2,4,6,7],context_test:[2,4],contextu:5,contraint:6,contrib:6,contribut:6,control:[3,6],control_depend:6,conv1d:6,conv1dlstm:6,conv1dtranspos:6,conv2d:[6,7],conv2d_transpos:6,conv2dlstm:6,conv2dtranspos:6,conv3d:6,conv3d_transpos:6,conv3dtranspos:6,conv:[2,4],conv_1d:6,conv_1d_lstm:6,conv_1d_transpos:6,conv_2d:6,conv_2d_depthwis:6,conv_2d_lstm:6,conv_2d_transpos:6,conv_3d:6,conv_3d_transpos:6,conv_gpu_test:[2,4],conv_lstm:6,conv_modul:7,conv_ndim:6,conv_net_2d:7,conv_net_2d_transpos:7,conv_test:[2,4],convent:8,convert:8,convlstm:6,convnet2d:7,convnet2dtranspos:7,convnet:[2,4,6],convnet_test:[2,4,6],convolut:[6,7],copi:[6,7],core:[3,6,8],corewithextrabuildarg:6,correct:6,correctli:[6,8],correpond:8,correspond:[3,6,7],cost:3,count:[6,8],cpu:3,creat:[0,5,6],create_beta_initi:6,create_bias_initi:6,create_featur:6,create_gamma_initi:6,create_linear_initi:6,create_mean_initi:6,create_variance_initi:6,create_weight_initi:6,creation:[5,6],cross:3,csh:0,current:6,curv:6,custom:[3,4,5,6,8],custom_build:3,custom_gett:[2,4,6,7],cut:7,data:[3,6,7],data_fil:3,data_format:6,dataset:3,dataset_shakespear:[1,2],deal:[6,8],decay_r:6,decis:6,declar:6,decod:3,decor:6,deep:[3,7],deep_rnn:6,deeper:6,deepmind:[0,6],deeprnn:[6,7],def:6,default_start_token:3,defer:6,defin:[0,6,7],definit:6,deliber:[3,6],depend:6,deprec:6,depthwis:6,depthwise_conv2d:6,depthwiseconv2d:6,deriv:6,describ:6,design:[3,6],desir:[6,7],detail:6,determin:[6,7],determinist:8,deviat:[6,7],devic:6,diagon:6,dict:[6,7,8],dictionari:[6,7,8],differ:[3,5,6,7,8],differentgrapherror:6,dilat:[2,4,6],dilation_test:[2,4,6],dim:6,dim_from:6,dimens:[3,6,7],dimension:6,direct:0,directori:0,disk:3,distinct:6,distribut:[6,8],divid:7,doe:[6,7],doesn:6,down:[6,7],dtype:[3,6,7],dual:7,duplic:6,dure:6,dynamic_rnn:6,each:[2,3,6],easi:6,easili:3,effect:[5,6],either:[6,7],element:[3,6,8],elsewher:6,emb:[2,4],embed:6,embed_dim:6,embed_test:[2,4],empti:6,enabl:[3,6],encapsul:3,encod:3,enforc:5,ension:6,ensur:[0,6,8],enter:6,entir:6,entri:[6,7],entropi:3,eps:6,epsilon:6,equal:[6,7],equival:6,error:6,essenti:7,etc:6,evalu:6,even:[5,6],everi:6,everyth:2,exampl:[0,1,2,5,6],except:[5,6,7],exclud:6,exhibit:6,exist:6,existing_vocab:6,expect:6,expens:6,experi:6,experiment:[2,4],explicitli:6,exponenti:6,expos:6,extern:6,extra:6,fact:6,factor:6,fall:6,fals:[3,5,6,7],fan_in_shap:6,far:6,featur:6,feed:6,few:6,field:[3,6],file:[0,6],filenam:5,fill:6,filter:[6,7],final_st:6,fine:6,finish:6,first:[0,3,6],fisher:7,fix:6,flag:[0,3,6],flat:8,flat_iter:8,flatten:[6,8],flatten_iter:8,flattentrailingdimens:6,float32:[3,6,7],follow:[0,2,3,6,8],forget:6,forget_bia:6,formal:7,format:[5,6],format_vari:6,format_variable_map:6,forward:6,found:6,from:[3,6,8],full:[6,7],fulli:[6,7],func:6,further:6,furthermor:6,fuse:6,gamma:6,gamma_c:6,gamma_h:6,gamma_x:6,gate:6,gated_rnn:[2,4],gated_rnn_test:[2,4],gener:[0,3,6],generate_str:3,geoffrei:7,get:6,get_collect:6,get_normalized_variable_map:6,get_possible_initializer_kei:[6,7],get_sav:6,get_shap:6,get_state_for_halt:6,get_vari:[5,6],get_variable_scope_nam:6,get_variables_in_modul:6,get_variables_in_scop:6,getter:5,git:0,github:[0,6],given:[6,8],global:6,global_vari:[5,6],good:7,googl:6,gpu:[0,7],gradient:[5,6],grammar:6,graph:[2,3,5,6],graphkei:[5,6],greater:6,grid:6,gridwarp:6,group:6,group_sliced_vari:6,gru:6,h_t:6,half:6,handl:6,hard:6,has:[0,3,5,6,7],has_bia:6,has_variable_scop:6,have:[0,5,6,8],height:[6,7],helper:6,henc:6,here:6,hidden:6,hidden_clip_valu:6,hidden_s:6,hidden_to_hidden:6,hidden_to_hidden_linear:6,hidden_to_hidden_vari:6,higher:6,hinton:7,hold:6,hole:6,hot:3,how:6,howev:[3,5,6],http:[0,6,7],human:3,iclr:7,ident:[6,7],identifi:6,identity_kernel_initi:7,ids:6,idx:6,iff:6,ignor:[6,7,8],ilya:7,imag:6,imagenet:7,immedi:6,implement:[6,7],improv:6,in_channel:7,in_plane_conv2d:6,in_to_hidden:6,in_to_hidden_linear:6,in_to_hidden_vari:6,includ:[6,7],include_diagon:6,include_off_diagon:6,incompat:6,incompatibleshapeerror:6,incorpor:6,increas:6,independ:6,index:6,indexedstatsbatchnorm:6,indic:[3,6],individu:6,infer:6,info:6,inform:[6,7],inherit:6,initi:[2,4,5,6,7],initial_learning_r:3,initial_logit:3,initial_st:[3,6],inplaneconv2d:6,input0:6,input1:6,input2:6,input:[3,6,7,8],input_:0,input_channel:6,input_example_index:6,input_s:6,input_sequ:6,input_shap:[6,7],input_tensor:6,insid:[5,6,7],instanc:[6,8],instanti:[0,6],instead:[0,6,8],instruct:[0,6],int32:6,integ:[3,6,7],interfac:[6,7],intermedi:6,intern:6,intial:[6,7],introduc:6,invers:6,invoc:6,invok:6,is_connect:6,is_iter:8,is_train:[3,6],isn:7,iter:[6,7,8],its:[6,7],itself:6,jdk:0,join_lin:6,just:[5,6],keep_prob:3,kei:[6,7,8],kernel:[6,7],kernel_shap:[6,7],keyerror:6,keyword:[5,6],know:6,known:6,koltun:7,krizhevski:7,ksh:0,kwarg:[3,5,6],label:3,label_batch_entri:3,lambda:6,larg:7,last:[6,7],last_connected_subgraph:6,latter:6,layer:[3,6,7],layer_norm:[2,4],layer_norm_test:[2,4],layernorm:6,lead:6,learn:6,learnabl:6,learnt:6,least:6,leav:6,left:6,length:[6,7],less:6,level:2,librari:[0,2,6],light:6,lightli:6,like:[5,6,7],limit:6,lin:[5,6],lin_output:6,linear:[0,2,5,6,7],linear_modul:7,linear_transpos:6,list:[3,6,7,8],littl:6,load:3,local:6,locat:6,log:6,log_vari:6,logic:3,logit:[3,6],longer:[6,7],look:6,loss:3,low:6,lower:6,lstm1:6,lstm1_output:6,lstm2:6,lstm2_output:6,lstm:[3,6],lstm_depth:3,lstm_next_stat:6,lstm_output:6,made:6,magnitud:7,mai:[2,3,6],main:3,mainli:6,maintain:6,make:[3,5,6,7],make_templ:6,manag:5,manipul:6,manual:6,map:[5,6,7],mask:6,match:[6,7],matric:6,matrix:6,max_grad_norm:3,max_unique_stat:6,maximum:6,mean:6,mean_i:6,meant:6,memori:6,mention:6,merg:6,merge_dim:6,merge_leading_dim:6,mergedim:6,method:[3,6],middl:7,might:6,min:6,min_input_s:7,mini:[6,7],minibatch:[3,6],minim:7,minimum:[6,7],mkdir:0,mlp:[2,4,6],mlp_test:[2,4,6],mode:[6,7],model:[3,6,7],model_rnn:6,model_s:7,modelrnn:6,modul:[0,1],module_nam:[6,7],module_or_op:6,module_with_build_arg:[1,2,6],more:6,most:6,move:6,moving_mean:6,moving_vari:6,multi:7,multipl:[6,7],multipli:6,must:[5,6,7,8],my_module_nam:6,my_rnn:6,mymodul:6,n_coeff:6,n_dim:6,name:[3,5,6,7],name_fn:5,name_for_cal:6,name_scop:6,necessari:6,need:[0,6,7],nest:[2,4,6],net1:5,net2:5,net:[2,4,5,6],network:[2,6,7],neural:[2,6,7],newlin:3,next:6,next_stat:6,next_state1:6,next_state2:6,nhwc:6,nip:7,no_constraint:6,no_shear_2d:6,no_shear_3d:6,nois:7,noisi:7,noisy_identity_kernel_initi:7,non:[5,6,7,8],non_train:[2,4],non_trainable_test:[2,4],none:[3,5,6,7],norm:6,normal:[6,7],notat:6,notconnectederror:6,note:[6,7,8],noth:5,notic:6,notinitializederror:6,notsupportederror:6,num_block:6,num_coeff:6,num_dim:6,num_embed:3,num_free_param:6,num_hidden:[3,5],num_output_class:7,num_step:3,num_training_iter:3,number:[3,6,7],numer:3,numpi:[3,8],obj:[3,6],object:[2,3,5,6,8],obs:3,obtain:6,occur:6,odd:7,off:[5,6,7],offer:6,offset:6,often:6,omit:6,onc:[5,6],one:[3,6],onli:[3,5,6],oper:[5,6,7],ops:[2,4,6,7],opt:3,optim:[5,6],optimizer_epsilon:3,option:[0,6,7],order:[6,8],ordereddict:8,org:[6,7],origin:6,other:6,otherwis:[0,7],out:[6,7],out_channel:7,output:[0,3,6,7],output_channel:[6,7],output_s:[3,6,7],output_shap:[6,7],over:6,overrid:6,own:2,pack:8,pack_iterable_a:8,pack_sequence_a:8,packag:1,pad:[6,7],pair:6,paper:[6,7],paramet:[6,7],parametr:6,parent:6,parentnotbuilterror:6,part:[2,6],particular:[3,6],partit:[6,7],partition:[6,7],partition_info:7,pass:[3,6,7],pdf:6,peek:6,peep:6,peephol:6,penalti:6,per:[6,7],perceptron:7,perform:6,permuted_mnist:6,pip:0,pixel:7,place:[2,6],placehold:6,plai:3,plain:8,plane:6,pleas:6,point:[6,7],pointwis:6,ponder:6,pondering_rnn:[2,4],pondering_rnn_test:[2,4],possibl:[5,6],possible_initializer_kei:[6,7],possible_kei:[6,7],possible_partitioner_kei:6,possible_regularizer_kei:6,post:6,preced:6,precis:6,predict:7,prefix:6,present:6,preserv:6,preserve_dim:6,prev:6,prev_cel:6,prev_stat:6,prev_state1:6,prev_state2:6,prevent:5,previou:[0,6],previous:5,previous_hidden:6,princip:6,print:3,prior:0,problem:6,produc:[3,6],progress:6,promot:6,proper:6,properti:[6,7],provid:6,psi:6,pub:6,purpos:6,python3:0,python:[0,1,2,3],queri:6,quit:3,rais:[6,7,8],random:3,random_uniform:6,rang:6,rank:6,rate:6,read:6,readabl:3,real:6,reason:6,receiv:6,recent:[0,6],recommend:6,recurr:6,recurs:8,reduc:6,reduce_learning_rate_interv:3,reduce_learning_rate_multipli:3,refer:6,regular:[6,7],rel:6,relev:6,relu:7,remain:6,remaind:6,remov:6,repack:8,repeatedli:2,replic:3,replica:6,report_interv:3,repres:[6,7],represent:3,request:[5,6],requir:[2,6,7],rescal:6,research:6,reset:6,reshap:6,residu:[2,4],residual_cor:6,residual_test:[2,4],residualcor:6,respect:[5,6],rest:[0,6],restor:[5,6,8],restore_initi:[2,4,8],restore_initializer_test:[2,4],restrict:6,result:[5,6,7],retriev:6,reus:[5,6],reuse_var:6,reuse_vari:6,revers:[6,7],rmsprop:6,rnn:[3,6],rnn_core:[2,4],rnn_core_test:[2,4],rnn_input:6,rnn_shakespear:[1,2],rnn_shakespeare_test:[1,2],rnncell:6,rnncore:6,row:6,run:[3,6,7],said:5,same:[3,5,6,7,8],sampl:3,sample_length:3,satisfi:6,save:6,saver:6,scalar:[6,7,8],scale:[6,7],scale_2d:6,scale_3d:6,scale_gradi:[2,4],scale_gradient_test:[2,4],scope:[5,6],scope_nam:6,scope_or_modul:6,score:6,script:[0,3],search:6,see:6,seen:6,select:[3,5,6],select_input:6,selectinput:6,self:[6,7],sens:6,sep:3,separ:[3,6],separable_conv2d:6,separableconv2d:6,seq:8,sequenc:[3,6,8],sequence_length:3,sequencedataopsnomask:3,sequenti:[2,3,4],sequential_test:[2,4],set:[5,6,7],settl:6,setup:6,shakespear:3,shallow:6,shape:[6,7],share:[2,6],shear:6,shear_2d:6,shift:6,should:[0,2,6],shown:[3,6],sigma:6,signal:6,similar:6,similarli:5,simpl:[3,6],simplest:6,simpli:6,simplifi:6,sinc:[5,6],singl:[6,8],size:[6,7],skip:[0,6],skip_connect:6,skip_connection_cor:6,skipconnectioncor:6,slice:6,slice_by_dim:6,slicebydim:6,slight:6,slot:6,small:6,smaller:6,snake_cas:6,snt:[0,2,3,5,6,7],solut:6,some:6,someth:6,sonnet:0,sort:8,sortabl:8,sourc:[3,5,6,7,8],source_shap:6,space:6,spatial:6,spatial_transform:[2,4],spatial_transformer_test:[2,4],special:6,specif:6,specifi:[0,6,7],split:6,split_leading_dim:6,spread:7,squar:7,stack:[3,6],standard:[6,7],start:[3,6,7],state:[3,6,7],state_s:6,statist:6,stddev:[6,7],stddev_i:6,steadi:6,step:[0,3,6],still:5,stop:5,stop_gradi:[2,4,6],stop_gradient_test:[2,4],stride:[6,7],string:[3,6,7,8],strip:6,structur:[6,8],sub:3,subclass:6,subgraph:6,subgraphinput:6,submodul:[1,2,4],subpackag:1,subsequ:6,subset:[3,6],subtleti:6,successfulli:0,succinct:6,suggest:6,sum:6,superclass:6,support:6,suppos:6,sure:6,sutskev:7,tabl:6,take:[2,5,6],taken:6,tanh:6,tanh_output:6,target:3,task:6,tcsh:0,technic:6,templat:6,temporari:0,tend:6,tensor:[3,6,7,8],tensorflow:[2,4,5,6,8],tensorshap:6,test:[3,6],test_local_stat:6,text_model:3,textmodel:3,textual:3,than:6,thank:6,thei:[6,8],them:6,theoret:6,therefor:6,thi:[0,2,3,5,6,7,8],think:6,third:6,three:6,threshold:6,through:6,thrown:6,thu:[5,6],tied:6,ties:7,tile:6,tile_by_dim:6,tilebydim:6,time:[3,5,6],time_average_cost:3,timestep:6,tini:3,tiny_shakespeare_dataset:3,tinyshakespearedataset:3,tmp:0,to_human_read:3,to_snake_cas:6,togeth:6,token:[3,6],token_list:3,tokendatasourc:3,too:6,top:2,total:6,toward:6,track:6,tradition:6,trail:6,train:[3,6],train_input:6,train_net:6,train_op:6,trainabl:[5,6],trainable_initi:6,trainable_initial_st:6,trainable_regular:6,trainable_vari:[5,6],trainableinitialst:6,trainablevari:6,transform:6,translat:6,translation_2d:6,translation_3d:6,transorm:6,transpos:[6,7],transposit:6,tri:6,triangular:6,truncat:7,truncation_length:3,tupl:[3,6,7,8],turn:[6,7],twice:6,two:[6,7],type:[6,7],typeerror:[6,8],typic:6,unalt:6,unbound:6,under:6,underspecifiederror:6,unimplementederror:6,uniniti:6,uninstal:0,uniquif:6,unit:6,uniti:6,unk:3,unrol:6,until:6,unused_argv:3,unused_bias_shap:6,unused_kwarg:6,updat:6,update_cel:6,update_op:6,update_ops_collect:6,upper:6,usag:[5,6],use:[3,5,6],use_batch_norm:7,use_batch_norm_c:6,use_batch_norm_h:6,use_batch_norm_x:6,use_bia:[6,7],use_dynamic_rnn:3,use_layer_norm:6,use_peephol:6,use_skip_connect:3,used:[2,5,6,7,8],useful:6,user:6,uses:[5,6],using:[0,3,5,6,8],util:[2,4,8],util_test:[2,4],valid:[3,6,7],valu:[5,6,7,8],valueerror:[6,7,8],vanilla:6,vanilla_rnn:6,vanillarnn:6,vari:6,variabl:[2,5,6],variable_map:6,variable_map_item:6,variable_scop:[5,6],variablescop:6,varianc:6,variant:7,vector:6,veri:6,verifi:0,versa:8,version:[0,3,6,7,8],vgg:7,via:6,vice:8,virtualenv_path:0,vision:7,vladlen:7,vocab_data_fil:3,vocab_s:[3,6],vocabulari:6,volumetr:6,w_dw:6,w_f_diag:6,w_gate:6,w_h:6,w_i_diag:6,w_o_diag:6,w_pw:6,w_x:6,wai:[5,6],want:6,warn:[5,6],warp:6,warper:6,weight:[6,7],weight_logit:6,well:6,were:6,what:6,wheel:0,when:[3,5,6,7],whenev:6,where:[6,7],wherea:6,whether:[3,6,7],which:[2,3,5,6,7],whl:0,whole:[3,6,7],whose:[6,8],wider:6,width:7,wildcard:6,wire:6,wise:6,wish:6,with_batch_norm_control:6,within:6,without:6,won:[5,6],word:3,word_eo:3,work:6,would:6,wrap:[3,6],wrapper:6,wrong:6,x_t:6,yet:6,yield:6,you:[0,6],your:[0,6],zero:[0,6],zero_st:6,zsh:0},titles:["Installing from source","sonnet","sonnet package","sonnet.examples package","sonnet.python package","sonnet.python.custom_getters package","sonnet.python.modules package","sonnet.python.modules.nets package","sonnet.python.ops package"],titleterms:{activ:0,alexnet:7,alexnet_test:7,attent:6,attention_test:6,base:6,base_test:6,basic:6,basic_rnn:6,basic_rnn_test:6,basic_test:6,batch_norm:6,batch_norm_test:6,bazel:0,block_matrix:6,block_matrix_test:6,build:0,clip_gradi:6,clip_gradient_test:6,content:[2,3,4,5,6,7,8],context:5,context_test:5,conv:6,conv_gpu_test:6,conv_test:6,convnet:7,convnet_test:7,custom_gett:5,dataset_shakespear:3,dilat:7,dilation_test:7,emb:6,embed_test:6,exampl:3,experiment:6,from:0,gated_rnn:6,gated_rnn_test:6,initi:8,instal:0,layer_norm:6,layer_norm_test:6,mlp:7,mlp_test:7,modul:[2,3,4,5,6,7,8],module_with_build_arg:3,nest:8,net:7,non_train:5,non_trainable_test:5,ops:8,packag:[2,3,4,5,6,7,8],pondering_rnn:6,pondering_rnn_test:6,python:[4,5,6,7,8],residu:6,residual_test:6,restore_initi:5,restore_initializer_test:5,rnn_core:6,rnn_core_test:6,rnn_shakespear:3,rnn_shakespeare_test:3,run:0,scale_gradi:6,scale_gradient_test:6,sequenti:6,sequential_test:6,sonnet:[1,2,3,4,5,6,7,8],sourc:0,spatial_transform:6,spatial_transformer_test:6,stop_gradi:5,stop_gradient_test:5,submodul:[3,5,6,7,8],subpackag:[2,4,6],tensorflow:0,util:6,util_test:6,virtualenv:0}})