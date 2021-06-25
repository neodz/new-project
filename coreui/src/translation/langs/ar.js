const ar = {

    sidebar: {
        mainMenu: {
            dashboard: 'لوحة القيادة',
            community: 'المجتمع الاكاديمي',
            academic: ' المنهاج الأكاديمي',
            evaluation: 'تقييم الطلاب',
            attendance: 'الحضور و الغياب',
            documents: 'المستندات',
            tasks: 'المهام',
            daily_plan: 'الخطط اليومية',
            questions: 'الأسئلة',
            homeWorks: 'الواجبات المنزلية',
            behavior: 'المهارات السلوكية ',
            buses_and_routes: 'الحافلات والمسارات',
            activities: 'النشاطات',
            bbb: 'التعليم على الانترنت',
            reports: 'التقارير',
            data_import: 'استيراد البيانات',
            setting: 'إعدادات'
        },
        subMenu: {
            dashboard: {
                my_dashboard: 'لوحة القيادة الخاصة بي',
                dashboards: 'لوحات تحكم المستخدمين',

                admin_dashboard: 'لوحة تحكم المدير',
                supervisor_dashboard: 'لوحة تحكم المشرف',
                employee_dashboard: 'لوحة تحكم الإداري',
                teacher_dashboard: '  لوحة تحكم الأستاذ',
                guardian_dashboard: 'لوحة تحكم الوصي',
                student_dashboard: ' لوحة تحكم الطالب',

            },
            community: {
                studentsT: 'الطلاب',
                students: 'الطلاب ',
                guardians: 'الأوصياء',
                employees: 'الموظفين',
                online_admission: 'التسجيلات عبر الإنترنت',

            },
            academic: {
                classes: 'الصفوف الدراسية',
                sections: 'الأقسام الدراسية',
                subjects: 'المواد الدراسية',
                courses: 'الدروس',
                week: 'المنهاج الدراسي',
                routine: 'التوقيت الزمني',
            },
            evaluation: {
                student_evaluation: {
                    self: 'تقييم الطلاب',
                    add_student_evaluation: 'جدول التقييمات',
                    student_evaluation_test: 'تقييم الطلاب',
                    show_student_evaluations : 'تقييم الطلاب',
                },
                behavior_evaluation: {
                    self: 'تقييم السلوك',
                    add_user_behavior: ' معاينة السلوك ',
                    user_behavior_test: ' قياس السلوك ',
                },

            },

            attendance: {
                employees_attendance: 'حضور الموظفين',
                students_attendance: 'حضور الطلاب'
            },
            behavior: {
                students_behavior: 'سلوك الطلاب',
                employees_behavior: 'سلوك الموظفين',
            },
            task: {
                all_tasks: 'كل المهام',
                my_tasks: 'مهامي الخاصة',
            },
            reportsSide: {
                reportSts: 'تقارير الطالب',
                reportScts: 'تقارير طلاب القسم ',

            },
            homework: {
                homeworks: 'الواجبات المنزلية',
                my_homeworks: 'واجباتي المنزلية'
            },
            data_import: {
                users_import: 'استيراد بيانات المستخدمين',
                questions_import: 'استيراد بيانات الأسئلة'
            },
            settings: {
                generalSettings: "إعدادات عامة",
                evaluationSettings: "إعدادات التقييم",

            }
        }
    },

    navbar: {
        langs: {
            ar: 'العربية',
            en: 'الإنجليزية',
            fr: 'الفرنسية'
        },
        profile: 'الملف الشخصي',
        logout: 'تسجيل خروج',

    },

    dailyPlan : {
        selectDate : "حدد التاريخ" ,
        description : "الوصف" ,
        note : 'ملحوظة',
        addNewNote  : 'أضف ملاحظة جديدة' ,
        devicesUsed  : 'الأجهزة المستخدمة' ,
        toolsUsed  : 'الأدوات المستخدمة' ,
        methodsUsed  : 'الأساليب المستخدمة' ,
        submit : 'حفظ' ,
        cancel : 'إلغاء',
        dailyPlans : 'الخطط اليومية',
        add : 'إضافة' ,
        show : 'معاينة' ,
        dpFor : 'خطة يوم' ,
        templates : 'القوالب' ,
        Break : 'استراحة' ,
        tasks : 'المهام' ,
        back : 'عودة' ,
        editDailyPlan : 'تعديل الخطة اليومية' ,
        delete : 'حذف' ,
        dp_deleted_successfully : 'تم حذف الخطة اليومية بنجاح' ,
        delete_alert : 'هل أنت متأكد من أنك تريد إجراء هذه العملية!' ,
        cancel_confirmation : 'هل أنت متأكد أنك تريد الإلغاء !' ,
        praying_times : {
            fajr : 'الفجر' ,
            dhuhr : 'الظهر' ,
            asr : 'العصر' ,
            maghrib : 'المغرب' ,
            isha : 'العشاء' ,
            other : 'اخرى' ,
        },
        meals_break : {
            coffee_break : 'استراحة لتناول القهوة' ,
            snack_break : 'استراحة وجبة خفيفة' ,
            breakfast_break : 'استراحة الإفطار' ,
            lunch_break : 'استراحة الغداء' ,
            dinner_break : 'استراحة العشاء' ,
            other : 'اخرى' ,
        },


    },

    admin_eva : {
        // show student evaluations admin side
        select_teacher : 'حددالمعلم',
        select_class :  'حددالصف',
        select_section : 'حددالقسم',
        select_subject : 'حدد المادة',
        select_students : 'حدد الطالب',
        selected_subjects : ' المواد المحددة {count}',
        select_all : ' تحديد الكل',
        selected_students : '  طالب | {count} طلاب ',
        mark : 'العلامة',
        note : 'الملاحظة' ,
        close : 'إغلاق' ,
        subEvaInfo : 'هذا التقييم له تقييمات فرعية اضغط عليه لمزيد من المعلومات.',
        select_chapter :'حدد الفصل' ,
        sub_evaluations : 'التقييمات الفرعية',
        filter_subject:'المادة',
        filter_teacher:'المعلم',
        no_students:'لا يوجد طلاب في القسم المختار',
        no_subject:'لا توجد مواد في الصف المختار',
        no_evaluation:'لا توجد  تقييمات .الرجاء جدولة التقييمات أولاً',
    },

    f_alert: {
        buttonValue: 'تنبيه',
        cancel: 'إلغاء',
        agree: 'موافق',
        title: 'تنبيه',
        defaultMsg: 'هل انت متأكد انك تريد استكمال هذا الإجراء؟',
    },

    createTaskPage: {
        formModal: {
            name: 'الاسم'
        },
    },
    cards: {
        select_assessments: 'التقييمات السابقة',
        deselect_assessments: 'اضغط لحذف العنصر',
        pervious_assessments: 'اضغط لاختيار العنصر',
        assessment: "التقييم"

    },
    cardItem: {
        delete: 'حذف',
        edit: 'تعديل',
        completed: 'منجز'
    },

    addActivityModal: {
        add_new: 'اضف نشاطا جديدا',
        activities: 'النشاطات',
        Number_of_activities: 'نشاطا',
    },

    activity: {
        notify: {
            success_add: 'تمت إضافة النشاط بنجاح',
            success_delete: 'تم حذف النشاط بنجاح',
            success_edit: 'تم تعديل النشاط بنجاح'
        },
        navMenu: {
            activities: 'الأنشطة',
            add_new: 'إضافة نشاط '
        },
        modal: {
            add_new: 'إضافة نشاط جديد',
            edit_activity: 'تعديل النشاط',
            activity_name: 'اسم النشاط',
            select_class: 'حدد الصف (صفوف)',
            select_section: 'حدد قسم (أقسام)',
            price: 'السعر',
            start_time: 'وقت البدء',
            private: 'خاص',
            public: ' عام',
            needs_approval: 'يحتاج إلى موافقة',
            doesnt_need_approval: 'لا يحتاج إلى موافقة',
            intenal: 'داخلي',
            extenal: 'خارجي',
            description: 'وصف النشاط',

            selected_classes: 'الصفوف المحددة',
            selected_sections: 'الأقسام  المحددة',
            select_all: 'اختر الكل ',
            selectLabel: 'اضغط لاختيار العنصر',
            deselectLabel: 'اضغط لحذف العنصر',
            deselectGroupLabel: 'اضغط لإلغاء تحديد الكل',
            selectGroupLabel: 'اضغط لتحديد الكل',
            save: 'حفظ',
            cancel: 'إلغاء',
        },
        index: {
            msg_delete:"لا يمكنك حذف النشاط لوجود طلاب مهتمين",
            not_intrested: 'غير مهتم',
            intrested: 'مهتم',
            not_showing: 'لم يظهر أي اهتمام',
            students: ' الطلاب المشتركين',
            free: 'مجاني',
            activity_details: 'تفاصيل النشاط',
            concerned_classes: 'الصفوف المعنية',
            subscriptions: 'الاشتراكات',
            uploadImages: 'رفع الصور',
            from: 'من',
            to: 'إلى'
        },
        addImagesModal: {
            cancel: 'إلغاء',
            upload: 'رفع'
        }
    },

    onlineAdmission: {
        uploadDocuments:'تحميل المستندات',
        Registration_Form: 'استمارة التسجيل',
        student_infos: 'معلومات الطالب',
        guardian_infos: 'معلومات ولي الأمر',
        health_form: 'استمارة صحية',
        welcome_letter: ' أمهاتنا الفاضلات... <br> حياكن الله معنا في روضتنا - لتسجيل طلابكن في "أقسام براعم اقرأ لتعليم القرآن الكريم" ',
        first: 'أولاً: البيانات الشخصية (بيانات الطالب)',
        first_name: 'الاسم الاول',
        last_name: 'اسم العائلة',
        select_sex: 'حدد الجنس',
        male: 'ذكر',
        female: 'أنثى',
        yes: 'نعم',
        no: 'لا',
        previously_enrolled: 'يرجى ذكر اسم المكان الذي التحق به',
        nationality: 'الجنسية ',
        birthday: 'تاريخ الميلاد',
        btn_next: 'التالى',
        btn_previous: 'السابق',
        second: 'معلومات الوصي ',
        father_infos: 'البيانات الشخصية (بيانات الوالد)',
        mother_infos: ' البيانات الشخصية (بيانات الوالدة )',
        job: 'المهنة',
        phone: 'رقم الهاتف المتحرك',
        second_phone: 'رقم الهاتف متحرك آخر',
        whatsup_number: 'رقم التواصل عبر الواتساب',
        relativePerson_infos: 'بيانات الشخص ذو صلة القرابة',
        relativePerson_name: 'اسم الشخص (للاتصال في الحالات الطارئة)',
        relativePerson_phone: 'رقم الشخص ذو صلة القرابة',
        relative_relation: 'صلة القرابة',
        third: 'ثالثا : بيانات خاصة بالسكن والمواصلات',
        emirate: 'الولاية',
        address: 'العنوان',
        region: 'المنطقة',
        door_number: 'رقم الباب',
        street_number: 'رقم الشارع',
        fourth: 'رابعاً: الكشف الصحي للطالب ',
        fifth: 'الوثائق المطلوبة',
        agree: 'أوافق',
        disagree: 'لا أوافق',
        submit: 'حفظ',
        successfully_done: 'تمت عملية التسجيل بنجاح',
        back_to_home_page: 'الصفحة الرئيسية',

        select_age_group: 'حدد الفئة العمرية',
        age_group: {g1: 'تحت 18 سنة', g2: 'فوق 18 سنة'},
        select_study_method: 'حدد طريقة الدراسة',
        study_methods: {m1: 'الدراسة داخل المعهد (حضوريا)', m2: 'الدراسة عبر الأنترنت'},
        select_guardianType: 'حدد  صفة ولي الأمر',
        submit_request: 'تقديم الطلب',
        allowed_person_to_take_the_child: 'من هو الشخص المسموح به باستلام الطالب',
        mention_it: 'أذكرها',
        request_sent_successfully: 'تم ارسال الطلب بنجاح!',
        request_sent_successfully_msg: 'شكرًا لك ، تم إرسال طلب القبول الخاص بك بنجاح ، وسوف نتصل بك بمجرد الانتهاء من دراسته.',
        add_guardian_optional: 'إضافة وصي (اختياري)',
        guardian_has_already_an_account: {has: 'الوصي لديه حساب ', hasnot: 'الوصي ليس لديه حساب'},
        check: 'تحقق',
        check_account_existence: 'تحقق من وجود الحساب عن طريق البريد الإلكتروني أو رقم الهاتف',
        no_record_matched: 'ملاحظة: لا يتطابق البريد الإلكتروني / الهاتف الذي تم إدخاله مع أي من سجلاتنا. تحقق من ذلك جيدًا ، أو حدد الخيار الثاني "الوصي ليس لديه حساب" لإنشاء حساب جديد.',


        approval: {
            click_here:'انقر هنا لرؤية معلومات و مستندات أخرى',
            wanted_class:'الصف المطلوب',
            enroll_requests: 'طلبات التسجيل',
            registrationForm: 'استمارة التسجيل',
            // buttons
            accepte: 'قبول',
            rejecte: 'رفض',
            handle_later: 'معالجة الطلب لاحقًا',
            bind_student_section: 'ارفاق الطالب بالقسم',
            accepted_successfully: 'تمت معالجة طلب التسجيل بنجاح',
            answers: 'إجابات استمارة القبول',

            person: {
                Full_name: 'الاسم الكامل',
                sex: 'الجنس',
                emirate: 'الولاية',
                firstNameTitle: 'الاسم الاول',
                lastNameTitle: 'اسم العائلة ',
                jobTitle: 'المهنة',
                birthdayTitle: 'تاريخ الميلاد',
                nationalityTitle: 'الجنسية',
                phoneTitle: 'رقم الهاتف',
                emailTitle:'البريد الإلكتروني',
                secondPhoneTitle: 'رقم الهاتف الثاني',
                whatsappNumberTitle: 'رقم الواتس اب',
                infos: 'المعلومات الشخصية',
                contacts: 'جهات الاتصال',
                //
                addressTitle: 'العنوان',
                status: 'الحالة',
                pending: 'معلق',
                accepted: 'مقبول',
                rejected: 'مرفوض',
            },
            navMenu: {
                pending_requests: 'الطلبات المعلقة',
                accepted_requests: 'الطلبات المقبولة',
                rejected_requests: 'الطلبات المرفوضة',
                select_requests_type: 'حدد نوع الطلبات'
            }
        },


    },

    v_messeges: {
        field_required: '👆 هذا الحقل مطلوب',
        first_matched_second: 'الرقم الأول والثاني لا ينبغي أن يكون نفسه',
        phone_min_max: 'يجب أن يحتوي رقم الهاتف على عشرة أرقام',
        invalidPhone: 'يجب أن يكون رقم الهاتف بالتنسيق التالي: 0552234567',
        minLength: '👆يجب أن يحتوي هذا الحقل على الأقل',
        maxLength: '👆يجب أن يحتوي هذا الحقل على الأكثر',
        minValue:'يجب أن تكون المدة على الأقل',
        maxValue:'يجب أن تكون المدة على الأكثر',
        letters: 'حروف.',
        uploadPoster: 'مطلوب تحميل ملصق',
        exist: 'اخذ من قبل',
        emailOrPhone: 'يجب أن يكون هذا الحقل بريدًا إلكترونيًا أو رقم هاتف صالحًا',
        capsLock : 'تحذير! الحروف الكبيرة مفعلة.',
        fields: {
            phone: 'رقم الهاتف',
            second_phone: 'رقم الهاتف الثاني',
            username: 'اسم المستخدم',
            email: 'البريد الإلكتروني',
            password: 'كلمة السر 6 حروف',
        }

    },

    week: {
        syllabus: 'المنهاج الدراسي',
        add: ' إضافة',
        select_memorise: ' اختر الحفظ',
        select_revision: '  اختر المراجعة',
        memorise: 'حفظ',
        revision: 'مراجعة',
        formModal: {
            add_week: 'إضافة أسبوع / شهر ',
            edit_week: 'تعديل الأسبوع / الشهر',
            week_name: 'اسم الأسبوع / الشهر',
            week_range: ' من - الى ',
            note: 'ملاحظة',
            submit: 'إضافة',
            cancel: 'إلغاء',
            option_selected: 'الدروس المحددة'
        },
        notify: {
            success_add: 'تمت إضافة الأسبوع/ الشهر بنجاح',
            success_delete: 'تم حذف الأسبوع/ الشهر بنجاح',
            success_edit: 'تم تعديل الأسبوع/ الشهر بنجاح'
        },
        edit: 'تعديل',
        delete: 'حذف',
    },

    taskManager: {
        filter : {
                created_at : 'أنشئت في',
                deadline : 'حد اقصى',
                filter_by : 'مصنف بواسطة',
                close : 'مغلقة',
                active : 'نشطة',
                low : 'أولوية منخفضة',
                high: 'أولوية عالية',
                for_others : 'للاخرين',
                and : 'و'
        },
        notify: {
            success_add: 'تمت إضافة المهمة بنجاح',
            success_edit: 'تم تعديل المهمة بنجاح',
            success_delete: 'تم حذف المهمة بنجاح',

        },
        header: {
            add_task: 'إضافة مهمة',
            back: 'رجوع',
            tasks: 'المهام'
        }
        ,
        index: {
            search: {
                task: 'البحث حسب اسم المهمة',
                employee: 'البحث باسم الموظف'
            },
            taskCard: {
                users_btn: 'موجه إلى',
                created_by_you : 'من انشاءك',
                created_by_others : 'من انشاء الآخرين',
                delete_btn: 'حذف',
                edit_btn: 'تعديل',
                completed_btn: 'منجزة',
                created_by: 'تم إنشاؤه بواسطة : ',
                you: 'انت',
                for_you : 'لك',
            }
            ,

        }
        ,
        taskNew: {
            select_role: 'حدد المسمى الوظيفي',
            select_user: 'اختر المستخدم',
            all_users: 'جميع المستخدمين',
            task_name: 'اسم المهمة',
            description: 'الوصف',
            deadline: 'الحد الأقصى',
            note:'ملاحظة',
            priority: {
                height: 'أولوية عالية',
                low: 'أولوية منخفضة'
            }
            ,
            submit: 'حفظ',
            cancel: 'إلغاء',
            name: 'مهمة'
        }
        ,
        taskUser: {
            not_started: 'لم يبدأ',
            not_finish: 'لم ينتهي',
        }
        ,
        taskUpdate: {
            close: 'أغلق',
            update_task: ' تعديل المهمة',
            save_changes: 'حفظ التغييرات'
        }
        ,
        taskShowByEmployee: {
            task: 'قائمة المهام',
            status: {
                all: 'الكل',
                new: 'الجديدة',
                process: 'قيد المعالجة',
                pending: ' المعلقة',
                completed: 'المنجزة',
                start: 'بدء',
                pause: 'ايقاف'
            }
            ,
            taskCard: {
                note: 'الملاحظة',
                no_result: 'لا توجد مهام\n'
            }

        }
    }
    ,
    StudentEvaluation: {

        cant_evaluate : 'لا يمكنك تقييم أي طالب حتى يتم تحديد الفصل الحالي. اتصل بالمسؤول لمزيد من المعلومات.',
        select_chapter_first : 'يجب عليك تحديد الفصل الحالي لهذا العام لتتمكن من رؤية تقييمات الطلاب.',

        new:{
          student_name:'اسم الطالب',
          student_photo:'صورة الطالب',
          student:' الطالب',
          enter_mark:"أدخل العلامة ثم اضغط على 'Enter'",
          enter_note:"أدخل الملاحظة  ثم اضغط على 'Enter'",
          total:'المجموع',
          msg:'يجب أن تكون القيمة أقل من أو تساوي',
          profileGuardian:{
            subject:'المادة',
            subject_name:'اسم المادة',
            subject_photo:'صورة المادة',
            results:'نتائج ',
            no_mark:'لم يتم تقييمه بعد'
          }
        },

        name : 'الاسم',
        type : 'النوع',
        description : 'الوصف',
        level : 'المستوى',
        score : 'العلامة',
        divisible : 'قابل للقسمة',
        indivisible : 'غير قابل للتقسيم',
        more_details : 'المزيد من التفاصيل',
        yes : 'نعم',
        no : 'لا',
        sub_evaluations : 'التقييمات الفرعية',


        dateEV:' التاريخ',
        assessmentE:'تقييم',
        msg_alertE:'هل أنت متأكد من حذف هذا التقييم؟',
        addAssessment:'جدولة تقييم جديد',
        editAssessment:'تعديل التقييم ',
        testEvaluationC:'تقييم الطلاب',
        resultOfEva:'نتيجة التقييم الإجمالية',
        percentageOf:'نسبة  إكتمال التقييم',
        concerned_courses:"الدروس المعنية",
        childE:'طالب',
        child1E:'طالب واحد',
        childrenE:'طلاب',
        children2E:'طالبين',
        newEva:'جديد',
        ancien2E:'تم تقييمهما',
        ancienE:' تم تقييمهم  ',
        ancien1E:' تم تقييمه  ',
        notancien2E:'لم يتم تقييمهما',
        notancienE:' لم يتم تقييمهم  ',
        notancien1E:' لم يتم تقييمه  ',
        selectCoursesE:'حدد درس (دروس) ',
        dailyEvaluation:"تقييم مستمر",
        periodicEvaluation:"الفرض",
        trimesterEvaluation:"الإختبار",
        scoreEvaluation:"التنقيط",
        select_type_evaluation:"حدد نوع التقييم",
        select_levels_evalution:"حدد المستوى",
        select_divisions_evaluation:"حدد الشعبة",
        with_levels_evaluation:"تقييم بالمستوى؟",
        is_divisible_evaluation:"تقييم قابل للتقسيم؟",
        no_divisible_evaluation:"تقييم غير قابل للتقسيم",
        add_subEvaluation:"إضافة تقييم فرعي",
        edit_subEvaluation:"تعديل التقييم الفرعي",
        subEvaluations:" التقييمات الفرعية",
        mainEvaluation:"التقييمات المقررة",

        modal:{
         add_evaluation:'إضافة تقييم جديد',
         deadline:'تاريخ التقييم',
         name:'اسم التقييم',
         note:'ملاحظة',
         submit:'حفظ',
         cancel:'إلغاء',
         select_classE : 'حدد الصف ',
        },
        comment:'الملاحظة',
        update:'تحديث',
        submit:'حفظ',
        cancel:'إلغاء',
        evaluation : 'تقييم الطلاب',
        select_class : 'اختر الصف',
        select_section : 'اختر القسم',
        select_week : 'اختر الاسبوع',
        select_evaluation : 'حدد التقييم',
        welcome : {
            welcome_body: 'هذه وحدة أبطال بسيطة ، وهي مكون بسيط على غرار الجامبوترون لتوجيه اهتمام إضافي إلى المحتوى أو المعلومات المميزة.',
            welcome_sub_body: 'هذه وحدة أبطال بسيطة ، وهي مكون بسيط على غرار الجامبوترون لتوجيه اهتمام إضافي إلى المحتوى أو المعلومات المميزة.',
            welcome_header: 'مرحبا بالعالم'
        }
        ,
        mark: {
            perfect: 'ممتاز',
            good: 'جيد جدا',
            average: 'جيد',
            null: 'يحتاج دعم',
        }
        ,
        operation: {
            edit: 'تعديل',
            view: 'معاينة',
            evaluate: 'تقييم'
        },
        alert: {

            select_class: 'اختر الصف',
            select_section: 'حدد القسم',
            select_week: 'اختر الاسبوع',
            select_evaluation: 'حدد التقييم',
            no_result: 'لا توجد نتيجة',
            new_evaluation: 'تمت العملية بنجاح',
            evaluation_not_found_create_one: 'لا يوجد تقييم :( إنشاء واحد!',
            select_subject: 'حدد الموضوع'
        },
        button: {
            add: 'تقييم جديد',
            show: 'معاينة النتائج'
        }
        ,
    },

    button: {
        add: 'إضافة',
        show: 'إظهار'
    }
    ,
    alert: {

        select_class: 'اختر الصف',
        select_section: 'حدد القسم',
        select_week: 'اختر الاسبوع',
        select_evaluation: 'حدد التقييم',
        no_result: 'لا توجد نتيجة',
        new_evaluation: 'تمت العملية بنجاح',
        evaluation_not_found_create_one: 'لا يوجد تقييم :( إنشاء واحد!',
        select_subject: 'حدد الموضوع'
    }
    ,
    time_attendance: {
        multi_select: {
            select: 'حدد وقت الحضور',
            from: 'من',
            to: 'إلى'
        }
    },

    level: {
        add_division  : 'إضافة شعبة',
        filter: {
            select_level: 'اختر المستوى',
            select_division: 'اختر الشعبة',
            none: 'بدون تحديد'
        },
        details: 'تفاصيل',
        modal: {

            no_division: "لا توجد شعب متوفرة",
            no_classes: "لا مبادرات متوفرة",
            section_number: "عدد الحلقات : ",
            no_sections: "لا توجد حلقات متوفرة",
            class_number: "عدد المبادرات : ",
            division_number: "عدد الشعب : ",
            name: "اسم المستوى",
            description: "وصف المستوى ",
            submit: 'اضافة',
            cancel: 'إلغاء',
            add_New: 'أضف مستوى جديدًا',
            update_New: 'تحديث مستوى',
            division: {
                name: "اسم الشعبة",
                description: "وصف الشعبة",
                submit: 'اضافة',
                update: 'تحديث',
                cancel: 'إلغاء',
            }
        },
        notify: {
            success_add: 'تم إنشاء المستوى بنجاح',
            deleteAlert: "هل أنت متأكد أنك تريد إزالة المستوى؟",
        }
    },
    class: {
        alert:{
          msg:'لا يمكنك إجراء أي عملية قبل',
          msg1:'إنشاء و تحديد السنة الدراسية الحالية',
          msg2:'انقر هنا',
        },
        level: {
            level: 'المستوى',
            division: 'الشعبة',
            multi_select_placeholder: 'حدد المستوى',
            multi_select_deselectLabel: 'إلغي المستوى',
            multi_select_selectLabel: 'حدد المستوى',

        },
        division: {
            multi_select_placeholder: 'حدد الشعبة',
            multi_select_deselectLabel: 'إلغي الشعبة',
            multi_select_selectLabel: 'حدد الشعبة',
        },
        add: 'إضافة ',
        modal: {
            max:'الحد الأقصى لعمر الطلاب',
            min:' الحد الأدنى لعمر الطلاب',
            name: 'اسم الصف',
            abbr: 'إختصار الصف',
            description: 'وصف الصف',
            poster: 'صورة الصف',
            start: 'من ',
            finish: 'الى',
            select_responsible: 'حدد المسؤول',

            add_New: 'إضافة صف جديد',
            submit: 'اضافة ',
            cancel: 'إلغاء'
        },
        modalEdit: {
            name: 'اسم الصف',
            abbr: 'إختصار الصف',
            description: 'وصف الصف',
            select_responsible: 'حدد المسؤول',

            edit_class: 'تعديل الصف ',
            edit: 'تعديل ',
            cancel: 'إلغاء',
        },
        notify: {
            success_add: 'تم إنشاء الصف بنجاح',
            success_delete: 'تم حذف الصف بنجاح',
            success_update: 'تم تعديل الصف بنجاح',
            deleteAlert: 'هل أنت متأكد أنك تريد حذف هذا الصف؟ إذا قمت بذلك ، ستفقد جميع الأقسام ذات الصلة !!',
            delete: 'هل أنت متأكد أنك تريد حذف هذا الصف',
            msg_alert: 'أقسام هذا الصف تحتوي على طلاب'

        },
        navMenu: {
            displaying: 'عرض',
            of: 'من ',
            items: 'عنصر',
            add_new: 'إضافة',
            classes: 'الصفوف',
            display_options: 'خيارات العرض',

        }

    },
    deleteAttendance:
        {
            notify: {
                success_add: 'تمت إضافة الحضور بنجاح',
                success_delete: 'تم حذف الحضور بنجاح',
                success_edit: 'تم تعديل الحضور بنجاح',
                all_student: 'يرجى تسجيل جميع الطلاب',
                select_date: 'يرجى تحديد التاريخ '
            },
            edit: 'تعديل',
            delete: 'حذف',
            add: 'إضافة',
        },


    deleteHomework:
        {
            notify: {
                success_add: 'تمت إضافة الواجب المنزلي بنجاح',
                success_delete: 'تم حذف الواجب المنزلي بنجاح',
                success_update: 'تم تعديل الواجب المنزلي بنجاح',

            },
            edit: 'تعديل',
            delete: 'حذف',
            add: 'إضافة'
            ,
            button: {
                add: 'إضافة',
                show: 'تبين'
            }
        },
    deleteEmployee:
        {
            notify: {
                success_add: 'تمت الإضافة بنجاح',
                success_delete: 'تم الحذف بنجاح',
                success_update: 'تم التعديل بنجاح',

            },
            Student_notify: {
                success_add: 'تمت الإضافة بنجاح',
                success_delete: 'تم الحذف بنجاح',
                success_update: 'تم التعديل بنجاح',

            },
            guardian_notify: {
                success_add: 'تمت الإضافة بنجاح',
                success_delete: 'تم الحذف بنجاح',
                success_update: 'تم التعديل بنجاح',

            },
            edit: 'تعديل',
            delete: 'حذف',
            add: 'إضافة'
            ,
            button: {
                add: 'إضافة',
                show: 'تبين'
            }
        },
    section: {
        teachers: 'المعلمين',
        navMenu: {
            sections: 'الأقسام الدراسية',
            add_new: ' إضافة قسم جديد',
            display_options: 'خيارات إضافية',
        },
        modal: {
            name: 'إسم القسم',
            capacity: 'السعة',
            min: 'الحد الأدنى',
            max: 'الحد الأقصى',
            class_room: 'القاعة ',
            select_class: 'حدد الصف',
            select_teacher: 'حدد المعلم الرئيسي',
            select_teachers: 'حدد حدد المعلمين',
            add_New: 'إضافة قسم جديد',
            edit_section: 'تعديل القسم',
            submit: 'اضافة قسم جديد ',
            cancel: 'إلغاء'
        },
        notify: {
            success_add: 'تمت إضافة القسم بنجاح',
            success_update: 'تم تحديث القسم بنجاح',
            success_delete: 'تم حذف القسم بنجاح',
            deleteAlert: 'هل أنت متأكد أنك تريد إزالة هذا القسم ؟ إذا قمت بذلك ، ستفقد جميع البيانات ذات الصلة بها !!'

        }
     },
     subject: {
        coefficient:'المعامل',
        navMenu : {
            subjects : 'المواد',
            add_new : 'إضافة',
            display_options :  'خيارات إضافية' ,
        },
        modal:{
            add_New : 'إضافة مادة جديدة',
            name : 'اسم المادة',
            abbr : 'اختصار المادة',
            description : 'وصف المادة',
            edit_subject : ' تعديل المادة',
            coefficient : 'معامل'
        },
        notify: {
            success_add: 'تمت إضافة المادة بنجاح',
            success_delete: 'تمت حذف المادة بنجاح',
            success_update: 'تمت تعديل المادة بنجاح',
            deleteAlert: 'هل أنت متأكد أنك تريد إزالة هذه المادة ؟ إذا قمت بذلك ، ستفقد جميع الدروس ذات الصلة بها !!',
            delete: 'هل أنت متأكد أنك تريد إزالة هذه المادة ؟ ',
            subject_courses: 'هذه المادة تحتوي على',
            course: ' دروس',
            subject_class: 'و تنتمي إلى الصف'
        }
    },
    course: {
        navMenu: {
            courses: 'الدروس',
            add_new: 'إضافة',
            display_options: 'خيارات إضافية',
            select_subject: 'حدد المادة'
        },
        modal: {
            add_New: 'إضافة درس جديد',
            edit_course: 'تعديل الدرس',
            name: 'اسم الدرس',
            description: 'نبذة عن الدرس',
            note: 'وصف الدرس',
        },
        notify: {
            success_add: 'تمت إضافة الدرس بنجاح',
            success_update: 'تمت تعديل الدرس بنجاح',
            success_delete: 'تمت حذف الدرس بنجاح',
            deleteAlert: 'هل أنت متأكد أنك تريد إزالة الدرس ؟ إذا قمت بذلك ، ستفقد جميع البيانات ذات الصلة به !!'

        }
    },
    guardian: {
        sub_not_support_quickbooks: "اشتراكك لا يدعم الكويكبوكس",
        msg_alert: 'هل أنت متأكد أنك تريد إزالة الطالب ؟ إذا قمت بذلك ، ستفقد جميع البيانات ذات الصلة به !! \n',
        student_sections: '  هذا الطالب تابع للقسم/للأقسام التالية \n',
        guardian_student: 'هذا الوصي مسؤول عن الطالب/الطلاب',
        header: {
            add: 'إضافة',
            addS: 'إضافة طالب جديد',
            back: 'رجوع'
        }
        ,
        index: {
            quickbook: 'غير مرتبط بالكويكبوكس',
            search: {
                name: 'البحث بالاسم أو الهاتف',
                no_result: 'لا توجد نتيجة',
            }
            ,
            text: {
                title: 'جميع الأوصياء',
                card: {
                    first_name: 'الاسم الاول',
                    whatsup_number: 'رقم الواتساب',
                    address: 'العنوان',
                    students: 'طلاب',
                    student: 'طالب واحد',
                    two_student: 'طالبين',
                    no_student: 'لا طلاب',
                    action: {
                        profile: 'الملف الشخصي',
                        edit: 'تعديل',
                        delete: 'حذف'
                    }
                }
            }
        }
        ,
        add: {
            msg_gardian: 'يجب إضافة او ربط الطالب بالوصي',
            active: 'نشط',
            not_active: 'غير نشط',
            integrated: 'مرتبط',
            not_integrated: 'غير مرتبط',
            account: 'حساب الكويكبوكس ',
            relative_person_name: 'شخص ذو صلة قرابة',
            relative_person_number: 'رقم الشخص ذو صلة قرابة ',
            name: 'الإسم',
            add: 'اضف وصي ',
            add_gardian: 'إضافة وصي ',
            select_gardian: ' اختر وصي',
            select_sex: "حدد الجنس",
            select_social_status: "حدد الحالة الاجتماعية",
            select_relative: "حدد صلة القرابة"
        }
        ,
        profile: {
            accounting: 'المحاسبة',
            activities: 'الأنشطة',
            waiting: ' معلقة',
            confirmed: 'مؤكد',
            rejected: 'مرفوض',
            aed: 'درهم',
            name: 'الملف الشخصي',
            first_name: 'الاسم الاول',
            last_name: 'اسم العائلة',
            address: 'العنوان',
            phone: 'رقم الهاتف',
            username: 'اسم المستخدم',
            email: 'البريد الإلكتروني',
            city: 'الولاية',
            social_status: 'الحالة الاجتماعية',
            nationality: 'الجنسية',
            whatsup_number: 'رقم الواتساب',
            second_phone: 'الهاتف الثاني',
            job: 'المهنة ',
            guardian_title: 'صفة الوصي',
            birthday: 'تاريخ الميلاد',
            sex: 'الجنس',
            title: 'لقب',
            relative: 'صلة القرابة',
            joining_date: 'تاريخ الانضمام',
            personal_data: 'البيانات الشخصية',
            select_students: 'حدد الطالب',
            guardian_title_value: {
                father: 'أب',
                mother: 'أم',
                guardian: 'وصي',
            }
            ,
            no_data: 'لا توجد بيانات',
            sex_value: {
                male: 'ذكر',
                female: 'انثى',
            }
            ,
            social_status_value: {
                widower: 'أرمل',
                divorced: 'مطلق',
                married: 'متزوج',
                single: 'أعزب',
                undefined: 'غير معرف',
            }
            ,
            action: {
                edit: 'تعديل الملف الشخصي',
                submit: 'حفظ',
                cancel: 'إلغاء'
            }
            ,
            title_value: {
                mr: 'سيد',
                madam: 'سيدة'
            }
            ,
            card: {
                activities: 'أنشطة'
            }
            ,
            alert: {
                required: 'مطلوب',
                email: 'غير صحيح'
            },
            accountings: {
                alert: " اقلب الشاشة لعرض المزيد من البيانات",
                sales: 'المستحقات',
                transactions: 'المدفوعات',
                balance: 'المتبقي',
                sale: 'القيمة',
                date: 'الأسبوع',
                transaction: 'الدفع',
                week: 'الفوترة',
                total: 'المجموع',
                description: 'الوصف',
                msg: 'يوجد خلل فالتواصل مع خادم الكويكبوك',
                download: 'تحميل',
                operations: 'العمليات'
            },
            evaluation_value: {
                Keep_going: 'واصل التقدم',
                good: 'جيد',
                care_more: 'اهتم اكثر',
                need_help: 'يحتاج مساعدة',
            }
        }
    },
    perent_employee: {
        button: {
            add: 'إضافة',
            show: 'إظهار'
        },
    },
    index_employee: {
        multi_select: {
            placeholder: 'حدد المسمى الوظيفي',
            search: ' البحث باسم او رقم هاتف الموظف',
            social_status: ' حددالحالة الاجتماعية',
            memorise: 'حدد مقدار الحفظ ',
            level: 'حدد مستوى التجوٌيد ',
            section: 'القسم'
        },
        button: {
            edit: 'تعديل',
            delete: 'حذف',
            profile: 'الملف الشخصي',
            create: 'اضافة',
            submit: 'حفظ',
            cancel: 'إلغاء',
            edit_employee: 'تعديل الملف الشخصي'
        },
        employee_info: {
            sections: 'الاْقسام',
            section: 'القسم',
            number: 'رقم هاتف',
            mother: ' رقم هاتف الام ',
            father: ' رقم هاتف الاب',
            guardian: 'رقم هاتف الوصي',
            first_name: 'الاسم الاول',
            last_name: 'اسم العائلة',
            nationality: 'الجنسية',
            birthday: 'تاريخ الميلاد',
            phone: 'رقم الهاتف ',
            address: 'العنوان',
            memorise: 'مقدار الحفظ ',
            level: 'مستوى التجوٌيد ',
            city: 'الولاية',
            sex: 'الجنس',
            joining_date: 'تاريخ الانضمام',
            title: 'لقب',
            email: 'البريد الإلكتروني',
            social_status: 'الحالة الاجتماعية',
            transportation: 'استخدام مواصلات المدرسة',
            certificate: 'الشهادة',
            islamic: '  إجتياز إختبار الدائرة'

        },
        sex_value: {
            male: 'ذكر',
            female: 'انثى',
        },
        social_status_value: {
            widowed: 'أرمل',
            divorced: 'مطلق',
            married: 'متزوج',
            single: 'أعزب',
        },
        profile: {
            guardians: 'الأوصياء',
            images: 'المستندات',
            homework: 'الواجبات المنزلية المقدمة',
            task: 'المهام المكتملة',
            absence: 'غياب المعلم',
            attendance: 'حضور المعلم',
            username: 'اسم المستخدم',
            password: 'كلمه السر',
            repeat_password: 'اعد كلمة السر',
            days: {
                saturday: 'السبت',
                sunday: 'الأحد',
                monday: 'الإثنين',
                tuesday: 'الثلاثاء',
                wednesday: 'الأربعاء',
                thursday: 'الخميس',
                friday: 'الجمعة'
            }
        },
        level_memorise_value: {
            medium: 'متوسط',
            good: 'جيد',
            very_good: 'ممتاز'
        },
        role_value: {
            driver: 'السائق',
            teacher: 'المدرس',
            student: 'الطالب',
            employee: 'الموظف',
            guardian: 'الوصي',
            librarian: 'أمين المكتبة',
            receptionist: ' السكرتارية',
            admin: '   مشرف تقنية المعلومات',
            supervisor: 'المشرف الأكاديمي',
            super: 'الادمن الرئيسي',
            // ordinary:' موظف عادي',

            manager: 'المدير',
            vice_manager: "نائب المدير",
            accountant: 'المحاسب',
            events_officer: ' مشرف الفعاليات',
            administrator: '  إداري دعم'

        },
        roles: 'الأدوار',
        personel_data: 'البيانات الشخصية',
        date: 'التاريخ',
        contact: 'اتصل',
        email: 'يجب أن يكون بريد إلكتروني',
        employee: 'الموظفيين',
        change_section: 'تغيير القسم'


    },
    homework: {
        messageError: 'يرجى اٍضافة جميع الأجوبة قبل ارسال الواجب المنزلي',
        homework_inprogress: 'الواجب المنزلي قيد المعالجة لدى الطلاب',
        msg_delete: 'هل انت متأكد أنك تريد استكمال هذا الاجراء ؟ ',
        msg_delete_guardian: 'هل انت متأكد أنك تريد استكمال هذا الاجراء ؟ ',
        msg_delete_week: 'هل انت متأكد أنك تريد استكمال هذا الاجراء ؟ ',
        msg_delete_attendance: 'هل انت متأكد أنك تريد استكمال هذا الاجراء ؟ ',
        msg_alert: ' لا يمكنك استكمال هذا الإجراء لأن ',
        have_class: 'الموظف مسؤول عن الصف',
        must_edit_class: 'يجب عليك تعديل الشخص المسؤول عن الصف أولا',
        have_section: 'الموظف مسؤول عن القسم',
        must_edit_section: 'يجب عليك تعديل الشخص المسؤول عن القسم أولا',
        minLength: '👆يجب أن يحتوي هذا الحقل على 4 حروف اوأكثر ',
        select_homework: 'حدد الواجب المنزلي',
        homeworks: 'الواجبات المنزلية',
        no_result: 'لا توجد نتيجة',
        test: {
            questions: 'الأسئلة',
            next: 'التالى',
            previous: 'السابق',
            done: 'تمت',
            finish: 'إنهاء',
            success: 'تمت الاجابة بنجاح'
        },
        add: {
            display_options: 'خيارات إضافية',
            question: 'السؤال',
            answer: 'الجواب',
            new: 'جديد',
            used: 'مستخدم',
            easy: 'سهل',
            hard: 'صعب',
            select_class: 'اختر الصف',
            select_section: 'اختر القسم ',
            number_section: ' الأقسام المحددة المحددة',
            select_subject: 'حدد المنهج',
            select_course: 'حدد الدرس',
            homework_name: 'اسم الواجب المنزلي',
            deadline: ' موعد نهائي',
            save: 'حفظ',
        },
        show: {
            section: 'القسم',
            multi_sections: ' عدة أقسام',
            button: {
                show_student: ' معاينة النتائج',
                show_progress: 'إظهار التقدم',
                test: 'اختبار',
                edit: 'تعديل',
                delete: 'حذف',
                back: 'رجوع',

            },
            progress: {
                class: 'الصف',
                homework: 'الواجب المنزلي',
                progress: '  نسبة إكتمال التقييم ',
                overall: ' النتيجة الإجمالية',
                false: ' الإجابات ',
                correct: 'الإجابات',
                answers_f: 'الخاطئة',
                answers_c: 'الصحيحة',
                processing: 'مستوى المعالجة',
                notStudent_1: 'الاْطفال لم يكملوا',
                notStudent_2: 'واجبهم المنزلي',
            },
            modal: {
                edit_homework: 'تعديل الواجب المنزلي',
                save_changes: 'حفظ التغييرات',
                close: 'أغلق',
                questions: 'الأسئلة',
                description: 'الوصف',
                ques: 'السؤال'

            }
        },
        show_students: {
            correct_answer: ' الإجابات الصحيحة ',
            false_answer: 'الإجابات الخاطئة ',
            score: 'العلامة',
            question: 'السؤال  ',
            correct: 'صحيح',
            false: 'خاطئ',
            note1: 'يحتاج اهتمام خاص',
            note2: 'تركيز أكثر',
            note3: 'مجتهد',
            note4: 'عمل رائع',
            note5: ' لم يجب بعد',

        }
    }
    ,
    attendance_S: {
        to: "إلى",
        student_profile: {
            info: 'معلومات الحضور',
            type: ' الحالة',
            date: 'التاريخ',
            section: 'القسم',

        },
        add_attendance: 'تسجيل الحضور  ',
        show_attendance: 'حضور الطلاب',
        showA_attendance: ' قائمة الحضور',
        attendance: 'حضور الطلاب',
        date: 'التاريخ',
        select_class: 'اختر الصف',
        select_section: 'حدد القسم ',
        select_date: ' حدد التاريخ',
        select_time: 'حدد الساعة',
        message: 'غير معرف',
        msg_all: 'تم تسجيل الحضور لجميع مدرسين هذه الحلقة في هذا الوقت',
        button: {
            edit: 'تعديل',
            delete: 'حذف',
            cancel: 'إلغاء',
            save: 'حفظ'
        },
        value: {
            present: 'حاضر',
            absent: 'غائب',
            late: 'متأخر',
            justified: 'مبرر'
        },

    },
    attendance_E: {
        employee_profile: {
            info: 'معلومات الحضور',
            type: ' الحالة',
            date: 'التاريخ',
            Role: 'المسمى الوظيفي',
        },
        add_attendance: 'تسجيل الحضور  ',
        show_attendance: 'حضور الموظفين',
        showA_attendance: ' قائمة الحضور',
        attendance: 'حضور الموظفين',
        date: 'التاريخ',
        select_role: 'حدد نوع المسمى الوظيفي',
        select_date: ' حدد التاريخ',
        message: 'غير معرف',
        button: {
            edit: 'تعديل',
            delete: 'حذف',
            cancel: 'إلغاء',
            save: 'حفظ'
        },
        value: {
            present: 'حاضر',
            absent: 'غائب',
            late: 'متأخر',
            justified: 'مبرر'
        },
    },
    dashboard_employee: {
        attendance: {
            present: 'حاضر',
            absent: 'غائب',
            teacher: 'مدرس',
            student: 'طالب',
            employee: 'موظف'
        },
        classes: {
            classes: 'الصفوف',
            sections: 'أقسام',
            teachers: 'المعلمون ',
            students: 'الطلاب'
        },
        evaluation: {
            top: 'الطلاب المتفوقون',
            less: 'الطلاب الأقل تفوقا ',
            no_data: 'لا توجد بيانات',
            no_section: 'لا يوجد قسم'
        },
        events: {
            event: ' النشاط',
            no_events: 'لا توجد نشاطات',
            name: 'الاسم',
            description: 'الوصف',
            public: 'عام',
            price: 'السعر',
            external: 'نشاط خارجي',
            approved: 'يحتاج إلى موافقة',
            informations: 'المعلومات',
            free: 'مجاني',
            yes: 'نعم',
            no: 'لا'
        },
        tasks: {
            all: 'كل المهام',
            completed: ' المنجزة',
            progress: 'قيد الانجاز',
            pending: 'قيد الانتظار',
            new: 'الجديدة'
        }
    }
    ,
    dashboard: {
        incomes_types: {
            activities_and_events: 'الأنشطة والفعاليات',
            donation_and_supports: 'المبيعات العامة',
            other_income: 'مصادر دخل أخرى',
            study_charges: 'الإشتراكات الدراسية',
            revenue_general: "الإيرادات - عام"

        },
        currencies: {
            USD: 'دولار',
            AED: 'درهم',
            DZD: 'دج'
        }
        ,
        expenses_types: {
            salaries: 'الرواتب',
            petrol: 'بترول',
            office_expenses: 'نفقات المكتب',
            taxes_licenses: 'الضرائب والتراخيص',
            rent_or_Lease: 'الإيجارات',
            purchases: 'المشتريات',
            bank_charges: 'الرسوم المصرفية',
            advertising: 'الدعاية',
            meals_and_entertainment: 'الطعام و الترفيه',
            legal_and_professional_fees: "الرسوم القانونية والمهنية",
            payroll_expenses: "نفقات الأجور",
            other_general_and_administrative_expenses: "مصاريف عمومية وإدارية أخرى",
            rent_or_lease_payments: "مدفوعات الإيجار أو الإيجار",


        },
        incomes: 'الإيرادات',
        expenses: 'المصاريف',
        more_detail: 'تفاصيل اًكثر',
        this_month: 'هذا الشهر',
        by_month: 'شهريا',
        teacher: {
            attendances: {
                present: 'حاضر',
                absent: 'غائب',
                students_attendance: 'حضور الطلاب',
                staff: 'العاملين',
                teacher: 'مدرس'
            }
            ,
            tasks: {
                all_tasks: 'جميع المهام',
                completed: 'منجز',
                progress: ' قيد الإنجاز',
                pending: ' معلقة',
                new: 'جديد',
                alert: 'لا توجد مهام متاحة'
            }
            ,
            syllabus: {
                previous_week: 'الأسبوع السابق',
                next_week: 'الاسبوع القادم',
                alert: 'لا توجد دورات متاحة',
                no_weeks_available: 'لا توجد أسابيع متاحة',
            }
            ,
            cards: {
                behaviors_students: {
                    top_behavior_student: '   أفضل الطلاب سلوكيا',
                    less_behavior_student: 'أضعف الطلاب  سلوكيا',
                    alert: 'حدد التاريخ  ',

                }
                ,
                evaluation_students: {
                    top_evaluation_student: 'أفضل الطلاب  تعليميا',
                    less_evaluation_student: 'أضعف الطلاب تعليميا',
                    alert: 'لا تتوفر بيانات'
                }
                ,
                behaviors_teachers: {
                    top_behavior_teachers: 'أفضل المدرسين  كفاءة',

                    best_teachers: 'أفضل المدرسين كفاءة',
                    less_teachers: 'أقل المدرسين كفاءة',
                    best_employees: 'أفضل الموظفين كفاءة',
                    less_employees: 'أقل الموظفين كفاءة',
                    alert: 'لا تتوافر بيانات'
                }
                ,
                homework: {
                    in_progress: 'قيد الإنجاز ',
                    done: 'منجز',
                    up_coming: 'القادم',
                    number_of_question: 'عدد الاسئلة'
                }
            }
            ,
            charts: {
                this_week: 'هذا الاسبوع',
                by_week: 'حسب الأسبوع',
                behavior_categories: {
                    class_management: 'إدارة الصف',
                    daily_management: 'التحضير اليومي',
                    communication: 'مهارات التواصل',
                    motivation: 'تحفيز الطلاب',
                    dealing_at_play_ground: 'التعامل في الملعب',
                    last_one: 'سلوكيات عامة',
                    dealing_with_admin: 'التعامل مع المشرف',
                    self_development: 'تطوير الذات',
                    timing: 'توقيت',
                    dealing_with_children_at_restaurant: 'التعامل مع الطلاب في المطعم',

                }
            }
        }
    }
    ,
    question: {
        selectcategory: 'حدد الفئة',
        questions: 'الأسئلة',
        question: 'السؤال',
        add_button: 'إضافة',
        delete: 'حذف',
        edit_button: 'تعديل',
        new: 'جديد',
        used: 'مستخدم',
        easy: 'سهل',
        so_easy: 'سهل جدا',
        hard: 'صعب جدا',
        so_hard: 'صعب',
        answer: 'الإحتمال',
        correct_answer: 'الجواب الصحيح',
        false_answer: 'الجواب الخاطئ',
        add: {
            type: 'حدد النوع',
            role: 'حدد الشريحة المستهدفة',
            add_question: 'إضافة سؤال جديد',
            add_false_answer: ' إضافة جواب خاطئ',
            more_answar: ' المزيد من  الاجوبة',
            behavior: 'سلوك',
            homework: 'واجب منزلي',
            category: 'حدد الفئة',
            sub_category: 'الفئة الفرعية',
            evaluative_behavior: 'سلوك تقييمي',
            social_behavior: 'سلوك اجتماعي',
            subject: 'حددالموضوع',
            course: 'حدد الدرس',
            false_answer: 'إجابة خاطئة',
            right_answer: 'إجابة صحيحة',
            another_answar: 'إجابة أخرى',
            level: 'مستوى الصعوبة',
            cancel: 'إلغاء',
            submit: 'حفظ',
        },
        notify: {
            add: 'تمت إضافة السؤال بنجاح',
            edit: 'تم تعديل السؤال بنجاح',
            delete: 'تم حذف السؤال بنجاح'
        },
        edit: {
            edit_question: "تعديل السؤال",
        }
    },
    routine: {
        notify: {
            success_add: 'تمت إضافة التوقيت بنجاح',
            success_edit: 'تم تعديل التوقيت بنجاح',

        },
        next_day: 'اليوم التالي',
        previous_day: 'اليوم السابق',
        submit: 'حفظ',
        msg: 'يرجى تحديد الصف ثم القسم لتحميل التوقيت الزمني',
        add: 'إضافة',
        show: 'إظهار',
        edit: 'تعديل',
        routine: 'التوقيت الزمني',
        class: 'الصف',
        section: 'الأقسام',
        show_routine: ' إظهار التوقيت الزمني',
        add_routine: ' إضافة توقيت زمني',
        edit_routine: ' تعديل التوقيت الزمني',
        start: 'يبدأ في',
        end: 'ينتهي في',
        subject: 'المادة',
        subject_add: ' إضافة مادة',
        no_subject:'  لا يمكنك إجراء أي عملية قبل إضافة المواد',
        no_time:'  لا يمكنك إجراء أي عملية قبل إضافة أوقات الدوام',

    },
    document: {
        error_msg:'لا يمكنك تحميل هذا المستند',
        delete: 'حذف',
        other: 'ملفات أخرى',
        health: 'الملفات الصحية',
        personal: 'الملفات الشخصية',
        categories: 'التصنيفات',
        close: 'اغلاق',
        cancel: 'الغاء',
        delete_doc: 'حذف المستند',
        confirm: ' تأكيد',
        msg_delete: 'هل انت متاكد انك تريد حدف المستند ',
        add_document: 'اضف مستند',
        name: 'ادخل الاسم',
        get_gategory: "اختر صنف الملف",
        image: 'صور',
        docm: 'مستندات',
        files: 'مستندات',
        video: 'فيديو',
        msg: 'مستندات تم تحميلها',
        nodata: 'لا توجد مستندات',
        notify: {
            success_add: 'تم تحميل المستند بنجاح',
            success_delete: 'تم حذف المستند بنجاح',

        },
    },
    editEvaluation: {
        edit_evaluation: 'تعديل التقييم'

    }
    ,
    bbb: {
        navMenu: {
            head : 'تعليم على الانترنت',
        },
        no_users: 'لا يوجد مستخدمين متصلين',
        moderator: 'المشرف',
        close: 'إغلاق الغرفة',
        details: 'تفاصيل',
        live: 'شغال',
        not_live: 'غير شغال',
        connected: 'أنت متصل',
        join: 'انضم',
        room_live: 'الغرف الشغالة',
        no_rooms: 'لا توجد غرف متاحة',
        start: 'ابدء',
        close_model: 'إغلاق',
        all_rooms: 'جميع الغرف',
        active_rooms: 'الغرف الشغالة',
        started_at : 'بدأت على',
        waiting : 'في انتظار الاتصال'
    },
    maps: {
        close: 'اغلاق',
        Longitude: 'خط الطول',
        Latitude: 'خط العرض',
        get_position: 'تحديد الاحداثيات',
    },
    behavior: {
        childR: 'طالب',
        childrenBB: 'الطلاب',
        modalerrormsg: 'لم يتم الإجابة على جميع الأسئلة',
        addM: 'إضافة قياس جديد',
        addNewR: 'إضافة سلوك جديد',
        restOfChildren: 'لم يقيموا',
        showIB: 'إظهار',
        noBehavior: 'لا توجد بيانات',
        evaCreation: 'إنشاء التقييم',
        childrenCB: 'إرفاق السلوك بالطالب',
        childrenTB: '  قياس السلوك',
        employeeCB: '  معاينة المهارات السلوكية',
        employeeTB: '  قياس السلوك',
        evaBehavior: 'تقييم السلوك',
        evaEducation: 'تقييم مدرسي',
        Behavior_Field: 'هذا الحقل مطلوب',
        select_typeRoles: 'حدد نوع المسمى الوظيفي',
        employeesBeh: 'المستخدمين',
        BehaviorResultC: 'نتيجة المهارات السلوكية  ',
        BehaviorResult: 'نتيجة قياس السلوك  ',
        noQuestion: 'لا توجد أسئلة',
        back: 'رجوع',
        of: 'خاص ب',
        answers: 'إجابات',
        parag: 'حدد الإجابات من هنا',
        txt: 'حدد مستخدم و ابدأ',
        users: 'مستخدمين',
        select_user: 'حدد مستخدم',
        role: 'مسمى وظيفي',
        class: 'صف',
        section: 'قسم',
        user: 'مستخدم',
        select_users: 'حدد المستخد(ين)',
        typeQ: ' أنواع الأسئلة',
        deadline: ' التاريخ',
        students: 'الطالب',
        question: 'سؤال',
        for: 'خاص ب',
        showresult: '  معاينة النتائج',
        showProgress: 'إظهار التقدم',
        edit: 'تعديل',
        delete: 'حذف',
        testBehavior: 'إختبار السلوك',
        processing: 'مستوى المعالجة',
        deleteAlert: 'هل أنت متأكد من إتمام هذه العملية؟',
        saveB: 'تعديل',
        cancelB: 'إلغاء',
        saveTest: 'حفظ',
        index: {
            behavior: 'السلوك',
            add: 'إضافة',
            edit: 'تعديل',
            delete: 'حذف',
            modal_title: 'تعديل السلوك',
            label_name: 'الإسم',
            answer: 'إجابة',
            placeholderName: 'إسم السلوك',
            progress: 'نسبة إكتمال التقييم',
            globalResult: 'نسبة النتيجة الإجمالية  ',
            b_number: 'شخص أو عدد',
            needHelp: ' بحاجة للإهتمام ',
            employeeBS: 'موظف',
            needHelpEM: 'بحاجة للمتابعة',
            notEvaluate: ' لم يقيم بعد',
            notEvaluateM: '  لم يقيم بعد',
            mark: 'العلامة',
            addnot: 'تمت إضافة السلوك بنجاح',
            goodOperation: 'نجاح العملية',
            editnot: 'تم تعديل السلوك بنجاح',
            deletenot: 'تم حدف السلوك بنجاح'


        },
        test: {},
        create: {
            soEasy: 'سهل جدا',
            hard: 'صعب',
            easy: 'سهل',
            used: 'مستعمل',
            soHard: 'صعب جدا',
            new: 'جديد',
            complet: 'إكمال عملية الإضافة',
            close: 'إغلاق',
            nbStudentSelected: 'الطلاب المحددين',
            section: 'الأقسام المحددة'
        },
        showResult: {},
        categoriesType: {
            cat1: 'إدارة الصفوف',
            cat2: 'التحضير اليومي',
            cat3: ' المهارات السلوكية',
            cat4: 'التعامل مع الإدارة',
            cat5: 'التعامل مع الطلاب في المطعم',
            cat6: 'إدارة الوقت',
            cat7: 'التحفيز',
            cat8: 'التواصل',
            cat9: 'التعامل في الملعب',
            cat10: 'السلوكيات العامة'
        },
        categoriesStudent: {
            catS1: 'تمكين الذات	',
            catS2: 'السلوك الدراسي',
            catS3: ' الصفات الشخصية',
            catS4: 'مهارات التواصل',
            catS5: 'التعاون مع الأخرين',
            catS6: 'الاهتمامات والمواهب',
            catS7: 'مهارات اجتماعية',
            catS8: 'إدارة الوقت',
            catS9: 'عادات التمدرس',
            // catS10:'سلوكيات العدوان الجسدي',
            catS11: 'المشاركة'
        },
    },

    Allreports: {
        reportType: 'نوع التقرير(أسبوعي أو شهري )',
        type1: 'شهري',
        type2: 'أسبوعي',
        evaluation_weeks: 'اختر الأسبوع',
        evaluationW: 'اختر التقييم'
    },

    report: {
        numberPresence:'عدد الحضور',
        numberAbsence:'عدد الغيابات',
        reportweek: 'تقرير أسبوعي',
        reportstudentweek: ' تقرير الطالب الاسبوعي ',
        reportstudentmonth: 'تقرير الطالب الشهري',
        reportallstudentweek: ' تقرير الطلاب الأسبوعي ',
        reportallstudentmonth: 'تقرير الطلاب الشهري',
        reportmonth: 'تقرير شهري',
        reportStudent: 'تقرير الطالب',
        reportAllStudents: 'تقرير تقييم الطلاب',
        from: 'من:',
        to: 'إلى:',
        showphoto: 'إظهار صور الطلاب',
        photo: 'الصورة',
        student: 'الطالب',
        address: 'العنوان',
        degree: 'الدرجة',
        mark: 'العلامة',
        rangeSection: 'ترتيب الحلقة',
        numberHomeWorks: 'عدد الواجبات المنزلية',
        globalEvaluation: ' التقييم العام',
        globalBehavior: ' السلوك العام',
        print: 'اطبع',
        back: 'رجوع',
        listFilter: 'قائمة الخيارات',
        filter: 'حدد الخيار',
        byclass: 'الصف',
        bysection: 'الحلقة',
        bybirthday: 'تاريخ الميلاد',
        bysex: 'الجنس',
        byname: 'الإسم',
        byNationality: 'الجنسية',
        viewReport: 'إظهار البيانات',
        byfemale: 'انثى',
        bymale: 'ذكر',
        byyear: 'السنة الدراسية',
        bynumber: 'العناصر',
        searchByName: 'البحث بالإسم',
        searchByNationality: 'البحث بالجنسية',
        numberMale: 'عدد الذكور',
        numberFemale: 'عدد الإناث',
        percentageForClass: 'النسبة المئوية',
        numberOfSectionsInclass: 'عدد الأقسام ',
        reportDataStudent: 'تقرير بيانات الطلاب',
        closeReport: 'إغلاق',
        numberStudentsR: 'عدد الطلاب',
        fname: 'اللقب',
        lname: 'الإسم',
        birthday: 'تاريخ الميلاد',
        absenceReports: {
            showphotoEmployee:'إظهار صورة الموظف',
            absence_employees_teachers: "تقارير غياب الموظفين والمعلمين",
            administrationType: "الإدارة",
            teachersType: "المدرسين",
            select_typerole: "حدد النوع",
            select_roles: "حدد المسمى الوظيفي",
            reportAbsences: "تقرير الغياب",
            absenceType: "الحالة",
            absenceDate: "التاريخ",
            startTime: "من",
            endTime: "إلى",
            periodTime: "الفترة",
            absentEM: " غائب",
            presentEM: "حاضر",
            morningEM: "الصباح",
            eveningEM: "المساء",
            classEM: "الصف",
            sectionEM: "القسم",
            numberHouresAbsence: "عدد ساعات الغياب",
            numberHoursPresent: "عدد ساعات الحضور",
        }
    },


    route_bus: {
        no_buses : 'لا توجد حافلات متاحة',
        routes_buses: 'المسارات والحافلات',
        map: 'الخريطة',
        routes: 'المسارات',
        buses: 'الحافلات',
        mapC: {
            speed: 'السرعة',
            status: 'الحالة'
        },
        route: {
            add_route: 'إضافة مسار',
            edit_route: 'تعديل المسار',
            route_in_map: 'المسارات',
            add: {
                name: 'الإسم',
                source_lat: 'خط العرض',
                source_long: 'خط الطول',
                destination_lat: 'خط العرض',
                destination_long: 'خط الطول',
                source_address: 'عنوان الإنطلاق',
                destination_address: 'عنوان الوصول',
                determine: 'تحديد الإحداثيات',
                field: 'يجب أن يكون خط العرض و خط الطول بالتنسيق التالي: 25.266661, 55.451503 ',
                field_lat: 'يجب أن يكون خط العرض  بالتنسيق التالي: 25.26666134567898  ',
                field_long: 'يجب أن يكون خط الطول بالتنسيق التالي: 55.45150365432168 ',

            },
            notify: {
                success_add: 'تمت إضافة المسار بنجاح',
                success_delete: 'تم حذف المسار بنجاح',
                success_update: 'تم تعديل المسار بنجاح',

            },
            index: {
                show_members: 'إظهار الاْفراد',
                show_buses: 'إظهار الحافلات',
                users: 'مستخدمين',
                buses: 'حافلات',
                source: 'الإنطلاق',
                destination: 'الوصول',
                no_buses: 'لا توجد حافلات متصلة'
            }

        },

        bus: {
            add_bus: 'إضافة حافلة',
            edit_bus: 'تعديل الحافلة',
            run: 'تشغيل',
            turnoff: 'إيقاف',
            bus: 'الحافلة',
            close: 'إغلاق',

            name: 'اسم الحافلة',
            model: 'النوع',
            plate_number: 'رقم الوحة',
            seats_number: 'عدد المقاعد',
            ownership: 'الملكية',
            select_ownership: 'حددالملكية',
            ownershipTypes: {owned: 'مملوكة', rented: 'مستأجرة'},
            parking: 'الموقف',
            rpimac: 'عنوان ماك',
            passengers: 'على متن الحافلة ',
            run_bus_alert: `هل تريد أن تشغيل الحافلة ؟`,
            delete_bus_alert: `هل تريد حذف الحافلة ؟`,
            turn_bus_of_to_delete_it: 'الحافلة تعمل ، لحذف الحافلة ، يجب عليك إيقاف تشغيلها.',
            note_run_bus_alert: 'ملاحظة : إذا قمت بتشغيل الحافلة ،ستبدأ عملية تسجيل صعود الطلبة على متن الحافلة.',
            select_route: 'حدد المسار',
            must_select_route: 'يجب عليك تحديد المسار قبل تشغيل الحافلة',
            preview: 'معاينة',
            imei : 'رقم Imei',
            logs_of : 'سجلات' ,
            show_logs : 'عرض السجلات',
            time : 'وقت',
            depart : 'المغادرة',
            arrive : 'الوصول',
            date : 'التاريخ' ,
            been_seen : 'شوهد' ,
            last_seen : 'شوهد آخر مرة' ,
            no_logs : 'لا يوجد سجلات',

            select_driver : 'حدد السائقين',

            notify: {
                success_add: 'تمت إضافة الحافلة بنجاح',
                success_delete: 'تمت حذف الحافلة بنجاح',
            }
        }
    }
    ,

    model_token: {
        title: 'تحذير',
        body: 'يرجى إعادة تحميل صفحتك.',
        back: 'العودة لتسجيل الدخول',
    }
    ,
    notification: {
        the_bus : 'الحافلة',
        about_to_arrive : 'قاربت على الوصول',
        new : 'جديدة',
        no_notifications : 'لا توجد اشعارات',
        notifications : 'الإشعارات',
        attendance: {
            student: 'الطالب',
            present: 'حاضر',
            absent: 'غائب',
            late: 'متأخر',
            justified: 'مبرر',
        },
        student: 'الطالب',
        student_female: 'الطالبة',
        at: 'في',
        online: {
            subscribe: 'إشترك'
        },
        accept: {
            subscribe: {
                female: 'سجلت',
                male: 'سجل',
            },
            section: 'الحلقة',
            in: 'في'
        },
        by: 'من قبل',
        for: 'إلى',
        for_you: 'إليك',
        task: {
            new_task: 'مهمة جديدة لك',
        }
        ,
        activity: {
            new_activity: 'نشاط جديد',
            need_to_approve: 'بحاجة إلى الموافقة'
        }


    },
    login: {
        center_name: 'الدب الصغير "Boosty"',
        login: 'تسجيل الدخول',
        email: ' رقم الهاتف   / اسم المستخدم / البريد الإلكتروني',
        password: 'كلمة السر',
        forget_password: ' إعادة تعيين كلمة السر',
        login_button: 'الدخول',
        password_error: 'كلمة السر غير صحيحة',
        username_error: 'اسم المستخدم غير صحيح',
        password_minLength: 'يجب أن تتكون كلمة السر من 6 أحرف على الأقل'

                },
                visitor:{
                    name:'اسم المدرسة / الحضانة',
                    name_visitor:'اسم الشخص المسؤول',
                    phone:'رقم الهاتف',
                    text:'يرجى تعبئة تفاصيل الاتصال الخاصة بكم ليتسنى لكم الدخول إلى النسخة التجريبية  ',
                    text_suit:' فقط انقر فوق "الدخول" بعد تعبئة البيانات '
                },
                help:{
                    homework:'كيفية إضافة واجب منزلي',
                    document:'كيفية تحميل مستند',
                    routine:'كيفية إضافة',
                    evaluation:'كيفية تقييم طالب',
                    behavior:'كيفية إضافة سلوك',
                    add_student:'كيفية إضافة طالب',
                    student_attendance:'كيفية إضافة حضور/غياب الطلاب'
                },
                importData:{
                    studentData:"بيانات الأطفال",
                    employeeData:"بيانات الموظفين",
                    teacherData:"بيانات المدرسين",
                    importStudentData:"إستيراد بيانات الأطفال",
                    importEmployeeData:"إستيراد بيانات الموظفين",
                    importTeacherData:"استيراد بيانات المدرسين",
                    datatableS:"جدول البيانات",
                    checkPhoneError:"يجب أن يكون رقم الهاتف بالتنسيق التالي: 0552234567  ",
                    checkEmailError:"  أو إذا كان موجود من قبلdemo@demo2.com:تأكد إذا  كان البريد الإلكتروني بالتنسيق التالي",
                     saveStudentData:"حفظ البيانات",
                     questionsData:" بيانات الأسئلة"
                         },
                docs:{
                    student:{
                        add_text1:'  لإضافة طالب جديد تحتاج إلى الضغط على',
                        add_button:' "إضافة طالب جديد" ',
                        add_text2:'سيظهر النموذج :',
                        step1:'املئ النموذج .',
                        step2:' ثم اربط الطالب مع ولي أمره ، عن طريق اختيار الوصي',
                        step3:'في حالة عدم وجود ولي الأمر ، الرجاء الضغط',
                        addG_button:' "اضف وصي" ',
                        step4:' ثم ، قم بتقديم النموذجين .',
                        note:'الملاحظة',
                        text_note:'لتتم العملية بنجاح يرجى ملء جميع الحقول المطلوبة',
                        note_profile:"لرؤية الملف الشخصي للطالب ، عليك النقر على هذا الزر ",
                        note_profile2:'  "ثم النقر على  "الملف الشخصي ',
                        edit:{
                            title:"تعديل معلومات الطالب",
                            edit_text1:"لتعديل معلومات الطالب تحتاج إلى الضغط على هذا الزر :",
                            step1:'ثم اضغط',
                            edit_button:' "تعديل" ',
                            text_step1:'سيظهر النموذج',
                            step2:'ثم قم بإرسال النموذج'

                        }

                    },
                    class:{
                        add_text1:'  لإضافة صف جديد تحتاج إلى الضغط على',
                        add:' إضافة صف',
                        add_button:'"إضافة"',
                        edit:' تعديل الصف',
                        edit_text:' لتعديل الصف تحتاج إلى الضغط على هذا الزر',
                        delete_note:"لحدف صف ، عليك النقر على هذا الزر ",
                        delete_note2:' "ثم النقر على "حدف',
                        },
                        progress_card:{
                            add:'إضافة  تقييم جديد  ',
                            text_add1:'لتقييم طالب عليك الضغط على الزر   ',
                            add_button:'"تقييم جديد"',
                            add_step1:'قم باختيار الصف(الصف الذي يدرس فيه الطالب)',
                            add_step2:'ثم اختر القسم (القسم الذي يدرس فيه الطالب)',
                            add_step3:'ثم اختر المنهج الأكاديمي',
                            add_step4:'وأخيرا حدد التقييم ',
                            text_add2:'ستظهر قائمة الطلاب القسم الذي اخترته,اختر اي طالب تريد تقييمه ثم اضغط على ',
                            text_add3:'ثم على ',
                            evaluation_button:'"تقييم"',
                            text_add4:'ستظهر قائمة المواد مرفوقة بحقول عليك ملأها',
                            text_add5:'بعد ادخال البيانات اضغط على ',
                            submit_button:'حفظ',
                            text_index1:'لمعاينة النتيجة اضغط على',
                            back_button:'"معاينة النتائج"',
                            text_index2:'أعلى الصفحة,أعد اختيار كل من (الصف,السم,المنهاج الأمكاديمي و التقييم) ,ستظهر قائمة الطلاب مع النتيجة المقدمة',
                            text_edit1:'لتعديل تقييم أعد نفس خطوات إضافة تقييم , اذا كان الطالب مقيم من قبل بعد الضغط على',
                            text_edit2:' "ستظهر كلمة "تعديل" عوض "تقييم" قم بالضغط عليها ,عدل التقييم و اضغط على "تعديل ',
                        },
                        rating_behavior:{
                          text_add1:'لإضافة قياس جديد اضغط على',
                          add_step1:'ابدأ العملية باختيار نوع السؤال و الفئة ',
                          add_step2:'ثم حدد الصف و القسم ',
                          add_step3:'اختر الأسئلة ',
                          add_step4:'اضغط على زر',
                          add_button2:'"إضافة"',
                          add_step5:'أكمل ملئ البيانات ',
                          add_step6:' أخيرًا اضغط على زر ',

                        },
                        assessment:{
                            title:'إضافة و جدولة تقييم',
                            text_add1:'لإضافة و جدولة تقييم اضغط على الزر',
                            button_add1:'إضافة  تقييم جديد',
                            text_add2:'سيظهر النموذج',
                            add_step1:' قم بملء الخانات الازمة',
                            add_step2:' قم اضغط على',
                            button_add2:'إضافة',
                            text_edit1:'لتعديل تقييم اضغط على',
                            text_edit2:' ثم على  ',
                            text_edit3:' قم بتعديل المعلومات ثم اضغط على زر ',
                            text_delete1:'لحدف تقييم اضغط على',
                            text_delete2:' ثم على ',
                            button_delete:'"حدف"',
                            button_edit:'"تعديل"',
                            text_delete3:'اضغط على ',
                            button_confirm:'"موافق"',
                            text_delete4:'لتأكيد العملية',



                        },
                        behaviorRatio:{
                            editAndDelete:'تعديل و حذف سلوك الطلاب',
                            textBR1:'لتعديل السلوك',
                            textBR2:'و بعد ذلك اضغط ',
                            textBR3:'عدل المعلومات اللازمة و قم بحفظ التعديلات بالضغط عل زر ',
                            textBR4:'لحذف السلوك ',
                            textBR5:'بعد ذلك قم بتأكيد العملية بالضغط على',
                            textBR6:'أو إلغائها بالضغط على زر',
                            textBR7:'"تعديل"',
                            textBR8:'"حذف"',
                            textBR9:'"موافق"',
                            textBR10:'"إلغاء"',
                            textBR11:'اضغط',




                        },


                    },


                    setting:{
                        with_levels:'مع المستويات' ,
                        role : {
                            title : 'إعدادات الدور',

                        },
                        attendance : {
                            add_time_slot : 'أضف فترة زمنية',
                            title : 'إعدادات الحضور',
                            no_times : 'لا توجد معلومات متاحة',
                            edit : 'تعديل',
                            new : 'أضف',
                            err : 'مطلوب عنصر واحد على الأقل',
                            start_time : 'وقت البدء',
                            end_time : 'وقت النهاية',
                            to : 'إلى',
                            duration : 'المدة (بالدقائق)',
                            minutes:'دقائق/دقيقة',
                            level_name : 'نظام الحضور والانصراف',
                            level_description : 'اوقات الحضور والغياب للنظام',
                            add_new : 'أوقات الدوام الجديدة',
                            edit_time : 'تعديل أوقات الحضور',
                            multi_select : {
                                select : 'اختر صنف',
                                deselect : 'إزالة النوع',
                            },
                            types : {
                                break_time : 'فترة إستراحة',
                                morning : 'فترة الصباح',
                                evening : 'فترة المساء'
                            }
                        },
                        level : {
                            title : 'إعدادات المستوى',
                            level_details : 'تفاصيل المستوى',
                            selected_levels : 'المستويات المختارة' ,
                        },
                        employeesLevels : {
                            title : 'الموظفين والمستويات',
                            select_level:'حدد المستوى التعليمي'
                        },
                        title:'الإعدادات',
                        subscription:'الاشتراك',
                        select:'حدد الاشتراك',
                        basic:'الأساسي',
                        pro:'المتقدم',
                        ultimate:' المتطور',
                        submit_alert:'هل انت متأكد انك تريد حفظ التعديلات?',
                        notify:{
                            success_edit:'تم تعديل الاشتراك بنجاح'
                        },
                        system:{
                          title:'إعدادات النظام',
                          center_name:'اسم المدرسة / الحضانة',
                          name:' الاسم',
                          phone:'رقم الهاتف',
                          email:'البريد الإلكتروني',
                          address:'العنوان',
                          footer:'تذييل/أسفل الصفحة',
                          language:'اللغة' ,
                          selectlang:'حدد اللغة',
                          gender:'الجنس ',
                          selectgender:'  حدد الجنس',
                          gender_type:{
                            mixed:'مختلط',
                            boys:'ذكور',
                            girls:'إناث'
                         },
                         logo:'الشعار',
                         select_currency_symbol:'حدد رمز العملة',
                         currency_symbol:'رمز العملة',
                         select_currency_code:'حدد اختصار العملة',
                         currency_code:'اختصار العملة',
                         more_details:'المزيد من التفاصيل',
                         max:'الحد الأقصى لعمر الموظفين',
                         min:' الحد الأدنى لعمر الموظفين',
                        },
                        user:{
                            title:'إعدادات المستخدم',
                        },
                        year:{
                            add:"إضافة سنة دراسية",
                            edit:'تعديل السنة الدراسية',
                            day:"يوم",
                            close:"أغلق",
                            title:'اعدادات السنة الدراسية',
                            year_add: 'تم إضافة السنة الدراسية بنجاح',
                            year_up: 'تم تحديث السنة الدراسية بنجاح',
                            success_delete_year:'تم حذف السنة الدراسية بنجاح',
                            chapter_add: 'تم إضافة الفصل بنجاح',
                            success_delete_chapter: 'تم حذف الفصل بنجاح',
                            chapter_up: 'تم تحديث الفصل بنجاح',
                            success_add_holiday: 'تم إضافة العطلة بنجاح',
                            success_delete_holiday: 'تم حذف العطلة بنجاح  ',
                            success_edit_holiday: 'تم تحديث العطلة بنجاح',
                            addChapter : ' إضافة فصل' ,
                            chapter_name : ' اسم الفصل',
                            chapter_start : ' بداية الفصل',
                            chapter_end : '  نهاية الفصل',
                            editChapter : ' تعديل الفصل' ,
                            addHoliday : ' إضافة عطلة' ,
                            holiday_name : ' اسم العطلة',
                            holiday_start : ' بداية العطلة',
                            holiday_end : ' نهاية العطلة',
                            holiday_description : ' وصف العطلة',
                            edit_holiday : ' تعديل العطلة' ,
                            submit : 'حفظ' ,
                            cancel: 'إلغاء',
                            select_syllabus : ' حدد المنهاج الدراسي' ,
                            year:'السنة الدراسية',
                            selectyear:' حدد السنةالدراسية',
                            creat_new_year:"إضافة سنة دراسية جديدة ",
                            name:'الاسم',
                            year_beginning:'بداية السنة دراسية',
                            year_ending:'نهاية  السنة دراسية',
                            student_beginning:' دخول الطلاب',
                            student_ending:'خروج الطلاب',
                            syllabus:' المنهج',
                            chapters:'الفصول',
                            selectchapter:'حدد الفصل',
                            creat_new_chapter:'إضافة فصل جديد',
                            start:'البداية',
                            finish:'النهاية',
                            holidays:'العطل',
                            create_new_holiday:'إضافة عطلة جديدة',
                            description:'الوصف',
                            duration:'المدة الزمنية',
                            holiday_list:'قائمة العطل',
                            ex:{
                                name:"السنة دراسية 2021",
                                syllabus:"المنهج الأمريكي",
                                chapter:"الفصل الأول",
                                holiday:"العطلة الصيفية",
                                des:"المكان والطرق...",
                                duration:'15 يوم'
                            },
                            am:"المنهج الأمريكي",
                            br:"المنهج البريطاني"

            }

        },
        notificationM:{
            notifications:'الإشعارات',
            archived:'مؤرشفة',
            unarchived:'غير مؤرشف',
            archive:'أرشفة الإشعار',
            unarchive:'إلغاء أرشفة الإشعار',
            date:'حدد التاريخ',
            details:'تفاصيل أكثر عن الإشعار',
            task:{
             created_by:'تم إنشاء المهمة من طرف'
            },
            activity:{
              student:'الطالب المعني'
            },
            online:{
             section:'القسم',
             class:'الصف'
            },
            type:{
                task:'إشعار بمهمة جديدة',
                absence:'إشعار بغياب ',
                present:'إشعار بحضور ',
                late:'إشعار بتأخير ',
                justified:'إشعار بغياب / تأخير مبرر ',
                activity:'إشعار بنشاط جديد يحتاج موافقة ',
                online:'إشعار بطلب الإلتحاق بالمدرسة',
                acceptonline:'إشعار بقبول طلب الإلتحاق بالمدرسة',
                bus:'إشعار بوصول حافلة النقل المدرسي'
            },
            bus:{
                name:'اسم الحافلة',
                model:'نوع الحافلة',
                plate_number:'رقم اللوحة'
            },
            route:{
                name:'اسم المسار',
                source_address:'عنوان الإنطلاق',
                destination_address:'عنوان الوصول'
            },
            filter:{
              listFilter: 'قائمة الخيارات',
              select_type:'حدد النوع',
              categories:{
                attendance:' إشعارات الحضور و الغياب',
                task:'إشعارات المهام',
                activity:'إشعارات الأنشطة',
                online:'إشعارات طلب الإلتحاق بالمدرسة',
                acceptonline:' إشعارات قبول طلب الإلتحاق بالمدرسة ',
                bus:' إشعارات وصول حافلة النقل المدرسي'
              },
              date:{
                  today:'اليوم',
                  yesterday:'أمس',
                  last_day:'اخر 7 ايام',
                  this_week:'هذا الاسبوع',
                  last_week:' الاسبوع الماضي',
                  this_month:'هذا الشهر',
                  last_month:'  الشهر الماضي',
                  today_earlier:'اليوم وفي وقت سابق',
                  this_year:'هذه السنة',
                  last_year:'العام الماضي',
                  range:'من-إلى'
              }
            }
        }


}


export default ar;
